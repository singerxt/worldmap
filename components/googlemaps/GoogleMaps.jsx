var GoogleMaps = React.createClass({
  componentDidMount() {
    /*var defaultLatLng = new google.maps.LatLng(0, 0),
        mapOptions = {
          zoom: 3,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: defaultLatLng
        };
    var map = new google.maps.Map(document.getElementById('mapcanvas'), mapOptions);*/
  },
  render: function() {
    return (
      <div id={this.props.handle} className="canvas"></div>
    );
  }
});
