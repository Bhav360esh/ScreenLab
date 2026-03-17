import "../styles/global.css";
import { motion } from "framer-motion";
import { useState } from "react";
import AuthModal from "../components/AuthModal";

function HeroBanner() {

    
    const [isOpen, setIsOpen] = useState(false);
    const [role, setRole] = useState("audience");

    return (
        <div className="heroContainer">

            {/* LEFT SIDE */}
            <div className="heroLeft">

                <h1>
                    Test Films & Ads <br /> Before Launch 🚀
                </h1>

                <p>
                    ScreenLab lets you validate content with real audiences,
                    analyze engagement, and optimize campaigns.
                </p>

                <div className="heroButtons">

                    <button
                        className="primaryBtn"
                        onClick={() => {
                            setRole("audience");
                            setIsOpen(true);
                        }}
                    >
                        Join as Audience
                    </button>

                    <button
                        className="secondaryBtn"
                        onClick={() => {
                            setRole("creator");
                            setIsOpen(true);
                        }}
                    >
                        Join as Creator
                    </button>
                    <AuthModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        defaultRole={role}
                    />

                </div>

            </div>

            {/* RIGHT SIDE VISUAL */}
            <div className="heroVisual">

                {/* BIG SHAPE */}
                <div className="mainVisual">

                    {/* Animated images */}
                    <motion.img
                        src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
                        className="visualImg imgA"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                    />

                    <motion.img
                        src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
                        className="visualImg imgB"
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 7, repeat: Infinity }}
                    />

                    <motion.img
                        src="https://image.tmdb.org/t/p/w500/k0ThmZQl5nHe4JefC2bXjqtgYp0.jpg"
                        className="visualImg imgC"
                        animate={{ y: [0, -25, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />

                </div>

                {/* FLOATING ELEMENTS */}

                <div className="floatingCard card1">
                    ⭐ 4.5 Rating
                </div>

                <div className="floatingCard card2">
                    📊 92% Engagement
                </div>

                <div className="floatingCard card3">
                    🎬 1200+ Creators
                </div>

            </div>

        </div>
    );
}

export default HeroBanner;