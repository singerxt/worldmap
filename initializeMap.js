(function() {
    var map,
        mapOptions,
        sunriseSunsetLayer;

    function initialize() {
        var defaultLatLng = new google.maps.LatLng(0, 0);
        
        // Options stored, use as default
        if (localStorage.getItem('mapOptions')) {
            mapOptions = JSON.parse(localStorage.getItem('mapOptions'));
            mapOptions.center = new google.maps.LatLng(mapOptions.center[0], mapOptions.center[1]);
        } else {
            mapOptions = {
                zoom: 3,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: defaultLatLng
            };
        }
        
        // Initialize Map
        map = new google.maps.Map(document.getElementById('mapcanvas'), mapOptions);
        
        // Sunrise Sunset layer
        sunriseSunsetLayer = new SunriseSunsetLayer(map, 'GOOGLE');
        sunriseSunsetLayer.autoUpdate = true;
        sunriseSunsetLayer.draw();
        
        // If nothing stored, center the map using HTML5 geolocation
        if (!localStorage.getItem('mapOptions')) {
            if (!!navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    map.setCenter(geolocate);
                    map.setZoom(8);
                });
            }
        }
        
        // Google Maps event listeners 
        google.maps.event.addListener(map, 'center_changed', function() {
            storeState(map);
        });
        
        google.maps.event.addListener(map, 'zoom_changed', function() {
            storeState(map);
        });
        
        google.maps.event.addListener(map, 'maptypeid_changed', function() {
            storeState(map);
        });
    }

    // Store data
    function storeState(map) {
        if (typeof(Storage) !== 'undefined') {
            mapOptions = {
                zoom: map.getZoom(),
                mapTypeId: map.getMapTypeId(),
                center: [map.getCenter().lat(), map.getCenter().lng()]
            };
            
            localStorage.setItem('mapOptions', JSON.stringify(mapOptions));
        }
    }

    // Initialize Map on window load
    google.maps.event.addDomListener(window, 'load', initialize);      
})();