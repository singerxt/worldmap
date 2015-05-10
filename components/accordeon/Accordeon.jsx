var AccordionButton = React.createClass({
  toggleTab: function() {
    console.log('accordeon: ' + this.props.component.props.handle);
  },
  render: function() {
    return (
      <button onClick={this.toggleTab}>
          {this.props.component.props.title}
      </button>
    );
  }
});

var Accordeon = React.createClass({
  toggleAccordeon: function() {
    console.log(this.props.component.props.handle);
  },
  render: function() {
    return (
      <dl className="accordeon">
        {this.props.components.map(function(component, i) {
          var classSelected;
          if (i === 0) {
            classSelected = 'selected ' + component.props.handle;
          } else {
            classSelected = component.props.handle;
          }

          return (
            <div className={classSelected} key={i}>
              <dt>
                <AccordionButton component={component} />
              </dt>
              <dd>
                {component}
              </dd>
            </div>
          );
        })}
      </dl>
    );
  }
});
