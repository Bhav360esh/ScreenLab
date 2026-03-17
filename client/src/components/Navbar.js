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
<Link to="/about">About</Link>
{/* <Link to="/how">How It Works</Link> */}
<Link to="/creator">Creators</Link>
<Link to="/audience">Join Audience</Link>

</div>

</div>

)

}

export default Navbar