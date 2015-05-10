var TabButton = React.createClass({
  toggleTab: function() {
    [].forEach.call(document.querySelectorAll('.tabs li.selected'), function(item) {
      item.classList.remove('selected');
    });
    [].forEach.call(document.querySelectorAll('.tabs li.' + this.props.component.props.handle), function(item) {
      item.classList.add('selected');
    });
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
