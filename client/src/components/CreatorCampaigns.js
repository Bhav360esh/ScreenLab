import "../styles/global.css";

function CreatorCampaigns(){

const campaigns = [
  {
    title: "Nike Ad Campaign",
    views: "12.5K",
    feedback: "88%",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    title: "Apple Product Launch",
    views: "20K",
    feedback: "92%",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    title: "Coca Cola Ad",
    views: "9K",
    feedback: "80%",
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
  },
  {
    title: "Netflix Trailer",
    views: "30K",
    feedback: "95%",
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
  }
];

return(

<div className="campaignSection">

<h2>Your Campaigns</h2>

<div className="campaignGrid">

{campaigns.map((item,index)=>(

<div className="campaignCard" key={index}>

<img src={item.img} alt={item.title} />

<div className="campaignOverlay">

<h4>{item.title}</h4>

<div className="campaignStats">

<span>👁 {item.views}</span>
<span>⭐ {item.feedback}</span>

</div>

</div>

</div>

))}

</div>

</div>

)

}

export default CreatorCampaigns;