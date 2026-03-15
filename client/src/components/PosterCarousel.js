import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PosterCarousel({ title, posters }) {

const responsive = {
desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
};

return (

<div className="carouselSection">

<h2>{title}</h2>

<Carousel responsive={responsive} infinite>

{posters.map((poster, index) => (

<div className="posterContainer" key={index}>

<img src={poster} alt="poster" className="poster" />

<div className="posterOverlay">

<p>Campaign Test</p>

<button>View Insights</button>

</div>

</div>

))}

</Carousel>

</div>

);
}

export default PosterCarousel;