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
