var TabButton = React.createClass({
  toggleTab: function() {
    console.log('tabs: ' + this.props.component.props.handle);
  },
  render: function() {
    return (
      <button onClick={this.toggleTab}>
          {this.props.component.props.title}
      </button>
    );
  }
});


var Tabs = React.createClass({
  render: function() {
    return (
      <div className="tabs">
        <ul className="control">
          {this.props.components.map(function(component, i) {
            var classSelected;
            if (i === 0) {
              classSelected = 'selected ' + component.props.handle;
            } else {
              classSelected = component.props.handle;
            }

            return (
              <li className={classSelected} key={i}>
                <TabButton component={component} />
              </li>
            );
          })}
        </ul>

        <ul className="pages">
          {this.props.components.map(function(component, i) {
            var classSelected;
            if (i === 0) {
              classSelected = 'selected ' + component.props.handle;
            } else {
              classSelected = component.props.handle;
            }

            return (
              <li className={classSelected} key={i}>
                {component}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});
