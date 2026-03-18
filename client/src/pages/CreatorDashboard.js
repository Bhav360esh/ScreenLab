import Topbar from "../components/Topbar";
import Filters from "../components/Filters";
import StatsCards from "../components/StatsCards";
import Charts from "../components/Charts";
import CreatorCampaigns from "../components/CreatorCampaigns";

function CreatorDashboard(){

return(

<div>

<Topbar/>

<h1 className="dashboardTitle About">Creator Dashboard</h1>

<Filters/>
<StatsCards/>
<CreatorCampaigns/>
<Charts/>

</div>

)

}

export default CreatorDashboard;