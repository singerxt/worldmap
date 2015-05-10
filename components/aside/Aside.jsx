var Aside = React.createClass({
  render: function() {
    return (
      <aside>
        <h2>Side Panel</h2>
        <button>toggle day night overlay</button>
        <button>toggle X overlay</button>
        <hr/>
        <p>members</p>
        <label>
          <input type="checkbox"/> Check all
        </label>
        <br/>
        <select multiple>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </aside>
    );
  }
});
