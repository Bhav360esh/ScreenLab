import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function AdsCarousel(){

const ads = [

"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
"https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
"https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg"

];

const responsive = {
desktop:{breakpoint:{max:3000,min:1024},items:5},
tablet:{breakpoint:{max:1024,min:464},items:3},
mobile:{breakpoint:{max:464,min:0},items:2}
};

return(

<div className="carouselSection">

<h2>Advertisements Watched</h2>

<Carousel responsive={responsive}>

{ads.map((ad,index)=>(

<div className="posterContainer" key={index}>

<img src={ad} alt="something" className="poster"/>

<div className="posterOverlay">
<p>Ad Feedback Given</p>
</div>

</div>

))}

</Carousel>

</div>

)

}

export default AdsCarousel;