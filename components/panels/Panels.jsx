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
