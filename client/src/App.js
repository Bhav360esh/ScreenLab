import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CreatorDashboard from "./pages/CreatorDashboard";
import AudienceDashboard from "./pages/AudienceDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function Layout() {

  const location = useLocation();

  // Hide Navbar on dashboard routes
  const hideNavbar =
    location.pathname === "/creator" ||
    location.pathname === "/audience";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creator" element={<CreatorDashboard />} />
        <Route path="/audience" element={<AudienceDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;