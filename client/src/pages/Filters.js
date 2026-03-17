function Filters() {
  return (
    <div className="filters">
      <h3>Filters</h3>

      <div className="filterRow">

        <select>
          <option>All Categories</option>
          <option>Film</option>
          <option>Ads</option>
        </select>

        <select>
          <option>All Regions</option>
          <option>India</option>
          <option>USA</option>
        </select>

        <select>
          <option>All Time</option>
          <option>Last Week</option>
          <option>Last Month</option>
        </select>

      </div>
    </div>
  );
}

export default Filters;