function StatsCards() {
  return (
    <div className="statsGrid">

      <div className="card highlight">
        <h4>Total Revenue</h4>
        <h2>$22.2M</h2>
        <span className="negative">-0.8%</span>
      </div>

      <div className="card">
        <h4>Active Campaigns</h4>
        <h2>320+</h2>
        <p>Running tests</p>
      </div>

      <div className="card">
        <h4>Audience Reach</h4>
        <h2>45K+</h2>
        <p>Active testers</p>
      </div>

      <div className="card">
        <h4>Feedback Collected</h4>
        <h2>163K</h2>
        <p>Responses</p>
      </div>

    </div>
  );
}

export default StatsCards;