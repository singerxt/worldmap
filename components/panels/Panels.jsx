var Panels = React.createClass({
  render: function() {
    return (
      <div className="panels">
        {this.props.structure.map(function(panel, i) {
          var buttonToggle = panel.toggle ? <ButtonToggle panel={panel} /> : null;
          var panelClass = "panel " + panel.content;
          var components = panel.components ? panel.components : null;

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
