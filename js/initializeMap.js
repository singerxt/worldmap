/*
# Build Map Script

In this File the map is being initilized and in the DOM will replace the `<div id="mapcanvas" class="mapcanvas">`.

As convention, the ID of the element is used in script while the class is used for styling.
*/

    var map,
        mc,
        mapOptions,
        sunriseSunsetLayer;

    function initialize() {
        // > Default map options
        var defaultLatLng = new google.maps.LatLng(0, 0),
            mapOptions = {
                zoom: 3,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: defaultLatLng
            };
        
        // > If have map options in storage, use it as default
        if (localStorage.getItem('mapOptions')) {
            // > Parse the serialized string into an array, and refresh the center position value 
            mapOptions = JSON.parse(localStorage.getItem('mapOptions'));
            mapOptions.center = new google.maps.LatLng(mapOptions.center[0], mapOptions.center[1]);
        }
        
        // > Initialize Map on element with ID `mapcanvas`
        map = new google.maps.Map(document.getElementById('mapcanvas'), mapOptions);

        // > Sunrise Sunset feature, turn on auto update and draw the overlay in the map
        sunriseSunsetLayer = new SunriseSunsetLayer(map, 'GOOGLE');
        sunriseSunsetLayer.autoUpdate = true;
        sunriseSunsetLayer.draw();
        
        // > If nothing stored, center the map using HTML5 geolocation
        if (!localStorage.getItem('mapOptions')) {
            if (!!navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    map.setCenter(geolocate);
                    map.setZoom(8);
                });
            }
        }
        
        // > Google Maps event listener `center_changed`
        google.maps.event.addListener(map, 'center_changed', function() {
            storeState(map);
        });
        
        // > Google Maps event listener `zoom_changed`
        google.maps.event.addListener(map, 'zoom_changed', function() {
            storeState(map);
        });
        
        // > Google Maps event listener `maptypeid_changed`
        google.maps.event.addListener(map, 'maptypeid_changed', function() {
            storeState(map);
        });

        // DRAW GIANT X ON EARTH! MUAHAHA :)
        //map.data.loadGeoJson('big-x.json');
        //map.data.setStyle({ fillColor: 'red', strokeColor: 'red' });

        // Markers and Clusters
        var markerClusterer = null;
        var markers = [];
        
        function refreshMap() {
            if (markerClusterer) {
                markerClusterer.clearMarkers();
            }
     
            for (var i = 0; i < profiles.features.length; i++) {
                var feature = profiles.features[i];
                var latLng = new google.maps.LatLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
                var marker = new google.maps.Marker({
                    position: latLng,
                    icon: {
                        url: feature.properties.avatar,
                        size: new google.maps.Size(52, 52),
                        scaledSize: new google.maps.Size(52, 52)
                    }
                });
                markers.push(marker);
            }

            markerClusterer = new MarkerClusterer(map, markers, {
                styles: [
                    {
                        url: 'img/x-52x52.png',
                        width: 52,
                        height: 52,
                        textSize: 12,
                        textColor: '#ffffff'
                    }
                ]
            });
        }

        setTimeout(function() {
            refreshMap();
        }, 500);
    }

    /*
    ## Storage State

    Store the `mapOptions` key with the current map state in the localStorage
    */
    function storeState(map) {
        if (typeof(Storage) !== 'undefined') {
            // > Get current state of zoom, mapTypeId and center
            mapOptions = {
                zoom: map.getZoom(),
                mapTypeId: map.getMapTypeId(),
                center: [map.getCenter().lat(), map.getCenter().lng()]
            };

            // > Since the localStorage only accepts string as the value,
            // > serialize the `mapOptions` array into a string 
            localStorage.setItem('mapOptions', JSON.stringify(mapOptions));
        }
    }
    
    /*
    ## Initialization

    Initialize Map on window load.
    */
    google.maps.event.addDomListener(window, 'load', initialize);      
