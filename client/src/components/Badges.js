function Badges(){

const badges = [
"🎬 Film Expert",
"📺 Ad Analyst",
"🔥 Active Tester",
"🏆 Top Reviewer"
];

return(

<div className="badgesSection">

<h2>Your Badges</h2>

<div className="badgesGrid">

{badges.map((badge,index)=>(

<div className="badgeCard" key={index}>
{badge}
</div>

))}

</div>

</div>

)

}

export default Badges;