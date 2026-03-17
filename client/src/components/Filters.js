function Filters() {
  return (
    <div className="filters">

      <div className="filtersHeader">
        <h3>Campaign Filters</h3>
      </div>

      <div className="filterRow">

        <div className="filterItem">
          <label>Category</label>
          <select>
            <option>All</option>
            <option>Films</option>
            <option>Ads</option>
          </select>
        </div>

        <div className="filterItem">
          <label>Region</label>
          <select>
            <option>Global</option>
            <option>India</option>
            <option>USA</option>
          </select>
        </div>

        <div className="filterItem">
          <label>Time</label>
          <select>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>

      </div>

    </div>
  );
}

export default Filters;