import HeroBanner from "../components/HeroBanner"
import PosterCarousel from "../components/PosterCarousel"
import StatsSection from "../components/StatsSection"
import InsightsGraph from "../components/InsightsGraph"
import FeatureCards from "../components/FeatureCards"
import Footer from "../components/Footer"

function Home(){

/* Film testing posters */

const filmPosters = [

"https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
"https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
"https://image.tmdb.org/t/p/w500/k0ThmZQl5nHe4JefC2bXjqtgYp0.jpg",
"https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
"https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
"https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"

]

/* Advertisement campaign posters */

const adCampaigns = [

"https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600",   // Nike style ad
"https://images.unsplash.com/photo-1603575448878-868a20723f5d?w=600",   // Apple product ad
"https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600",      // Coca Cola bottle ad
"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600",   // Adidas shoe ad
"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",   // tech brand ad
"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600"    // Fast food brand ad

]

/* Trailer testing */

// const trailers = filmPosters

return(

<div>

<HeroBanner/>

<StatsSection/>

<FeatureCards/>



<PosterCarousel
title="Trending Film Test Screenings"
posters={filmPosters}
/>

<PosterCarousel
title="Ad Campaign Testing"
posters={adCampaigns}
/>

{/* <PosterCarousel
title="Trailer Feedback Testing"
posters={trailers}
/> */}



<InsightsGraph/>



<Footer/>

</div>

)

}

export default Home