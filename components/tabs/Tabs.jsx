var Tabs = React.createClass({
  render: function() {
    return (
      <div className="tabs">
        <ul className="control">
          {this.props.components.map(function(component, i) {
            return (<li><button>tab</button></li>);
          })}
        </ul>

        <ul className="pages">
          {this.props.components.map(function(component, i) {
            return (<li>{component}</li>);
          })}
        </ul>
      </div>
    );
  }
});
