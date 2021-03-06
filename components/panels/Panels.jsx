var ButtonToggle = React.createClass({
  togglePanel: function() {
    app.classList.toggle(this.props.panel.content);
  },
  render: function() {
    return (
      <button onClick={this.togglePanel} className="toggle">Togle visibility</button>
    );
  }
});

var Panels = React.createClass({
  render: function() {
    return (
      <div className="panels">
        {this.props.structure.map(function(panel, i) {
          var buttonToggle = panel.toggle ? <ButtonToggle panel={panel} /> : null;
          var panelClass = 'panel ' + panel.content + ' ' + panel.mode;

          var components = null;
          if (panel.components && panel.mode === 'tabs') {
            components = <Tabs components={panel.components} />;
          } else if (panel.components && panel.mode === 'accordeon') {
            components = <Accordeon components={panel.components} />;
          } else {
            components = panel.components;
          }

          return (
            <div className={panelClass} key={i}>
              {components}
              {buttonToggle}
            </div>
          );
        })}
      </div>
    );
  }
});
