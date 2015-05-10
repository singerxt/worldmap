var GoogleMaps = React.createClass({
  componentDidMount() {
    var defaultLatLng = new google.maps.LatLng(0, 0);
    var mapOptions = {
          zoom: 3,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: defaultLatLng
        };
    var map = new google.maps.Map(document.getElementById(this.props.handle), mapOptions);

    setTimeout(function() {
      map.data.loadGeoJson('json/features.json');
    }, 500);
  },
  render: function() {
    return (
      <div id={this.props.handle} className="canvas"></div>
    );
  }
});
