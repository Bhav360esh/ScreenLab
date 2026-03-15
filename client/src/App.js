import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import HowItWorks from "./pages/HowItWorks"
import Creators from "./pages/Creators"
import JoinAudience from "./pages/JoinAudience"

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/how" element={<HowItWorks/>}/>
<Route path="/creators" element={<Creators/>}/>
<Route path="/join" element={<JoinAudience/>}/>

</Routes>

</BrowserRouter>

)

}

export default App