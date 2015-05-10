var AccordeonButton = React.createClass({
  toggleAccordeon: function() {
    [].forEach.call(document.querySelectorAll('.accordeon div.selected'), function(item) {
      item.classList.remove('selected');
    });
    [].forEach.call(document.querySelectorAll('.accordeon div.' + this.props.component.props.handle), function(item) {
      item.classList.add('selected');
    });
  },
  render: function() {
    return (
      <button onClick={this.toggleAccordeon}>
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
                <AccordeonButton component={component} />
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
