import "../styles/global.css"
import { motion } from "framer-motion"
import { FaPlay, FaChartBar } from "react-icons/fa"

function HeroBanner(){

return(

<div className="heroBanner">

<div className="heroContentWrapper">

{/* LEFT SIDE */}

<div className="heroLeft">

<h1 className="heroTitle">
ScreenLab
</h1>

<p className="heroSubtitle">
The audience testing platform for filmmakers,
brands and creators to analyze audience reactions
before content release.
</p>

<div className="heroStats">

<div>
<h2>45K+</h2>
<p>Audience Testers</p>
</div>

<div>
<h2>1200+</h2>
<p>Creators</p>
</div>

<div>
<h2>320+</h2>
<p>Campaign Tests</p>
</div>

</div>

<div className="heroButtons">

<button className="primaryBtn">
<FaPlay/> Watch Demo
</button>

<button className="secondaryBtn">
<FaChartBar/> Start Testing
</button>

</div>

</div>

{/* RIGHT SIDE */}

<div className="heroRight">

<motion.img
src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
className="heroImage img1"
animate={{ y:[0,-20,0] }}
transition={{ duration:6, repeat:Infinity }}
/>

<motion.img
src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
className="heroImage img2"
animate={{ y:[0,20,0] }}
transition={{ duration:7, repeat:Infinity }}
/>

<motion.img
src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"
className="heroImage img3"
animate={{ y:[0,-25,0] }}
transition={{ duration:5, repeat:Infinity }}
/>

</div>

</div>

</div>

)

}

export default HeroBanner