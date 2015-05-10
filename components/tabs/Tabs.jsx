var Tabs = React.createClass({
  render: function() {
    return (
      <div className="tabs">
        <ul className="control">
          {this.props.components.map(function(component, i) {
            return (
              <li className={component.props.handle} key={i}>
                <button>{component.props.title}</button>
              </li>
            );
          })}
        </ul>

        <ul className="pages">
          {this.props.components.map(function(component, i) {
            return (
              <li className={component.props.handle} key={i}>
                {component}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});
