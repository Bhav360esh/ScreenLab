import { Link } from "react-router-dom";

function CTA(){

return(

<div className="cta">

<h2>Start Testing Your Content Today</h2>

<p>
Join ScreenLab and make data-driven creative decisions before release.
</p>

<Link to="/creators">
<button className="ctaBtn">Start Your First Test</button>
</Link>

</div>

)

}

export default CTA