var Accordeon = React.createClass({
  toggleAccordeon: function() {
    console.log('toggleAccordeon');
  },
  render: function() {
    return (
      <dl className="accordeon">
        {this.props.components.map(function(component, i) {
          return (
            <div className={component.props.handle} key={i}>
              <dt>
                <button onClick={this.toggleAccordeon}>
                  {component.props.title}
                </button>
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
