var Accordeon = React.createClass({
  render: function() {
    return (
      <dl className="accordeon">
        {this.props.components.map(function(component, i) {
          return (
            <div key={i}>
              <dt><button>tab</button></dt>
              <dd>{component}</dd>
            </div>
          );
        })}
      </dl>
    );
  }
});
