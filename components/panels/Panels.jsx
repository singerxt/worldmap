var Panels = React.createClass({
  render: function() {
    return (
      <div className="panels">
        {this.props.structure.map(function(panel, i) {
          var buttonToggle = panel.toggle ? <ButtonToggle panel={panel} /> : null;
          var panelClass = "panel " + panel.content;
          return (
            <section className={panelClass} key={i}>
              <h1>{panelClass}</h1>
              <i>{panel.info}</i>
              {buttonToggle}
            </section>
          );
        })}
      </div>
    );
  }
});
