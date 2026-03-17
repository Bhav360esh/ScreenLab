import Topbar from "../components/Topbar";
import AdsCarousel from "../components/AdsCarousel";
import Badges from "../components/Badges";
import Leaderboard from "../components/Leaderboard";

function AudienceDashboard(){

return(

<div>

<Topbar/>

<h1 className="dashboardTitle About">
Audience Dashboard
</h1>

{/* 🔥 STATS */}

<div className="statsGrid">

<div className="card">
<h4>Films Watched</h4>
<h2>32</h2>
</div>

<div className="card">
<h4>Ads Watched</h4>
<h2>18</h2>
</div>

<div className="card highlight">
<h4>Loyalty Points</h4>
<h2>1200</h2>
</div>

<div className="card">
<h4>Leaderboard Rank</h4>
<h2>#24</h2>
</div>

</div>



{/* 📺 ADS */}
<AdsCarousel/>

{/* 🏅 BADGES */}
<Badges/>

{/* 🏆 COMMUNITY + RANK */}
<Leaderboard/>

</div>

)

}

export default AudienceDashboard;