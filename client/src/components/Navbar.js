import { Link } from "react-router-dom";
import "../styles/global.css";

function Navbar(){

return(

<div className="navbar">

<div className="logo">
ScreenLab
</div>

<div className="navLinks">

<Link to="/">Home</Link>
<Link to="/how">How It Works</Link>
<Link to="/creators">Creators</Link>
<Link to="/join">Join Audience</Link>

</div>

</div>

)

}

export default Navbar