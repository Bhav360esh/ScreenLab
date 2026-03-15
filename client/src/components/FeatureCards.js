import {
    FaFilm,
    FaUsers,
    FaChartLine,
    FaLock,
    FaGlobe,
    FaRobot
    } from "react-icons/fa"
    
    import "../styles/global.css"
    
    function FeatureCards(){
    
    const features = [
    
    {
    icon:<FaFilm size={40}/>,
    title:"Secure Test Screenings",
    desc:"Upload films, trailers and ads securely for private audience testing before public release."
    },
    
    {
    icon:<FaUsers size={40}/>,
    title:"Targeted Audience Panels",
    desc:"Select viewers by age, interests, region or culture to match your real audience."
    },
    
    {
    icon:<FaChartLine size={40}/>,
    title:"Insight Analytics",
    desc:"Understand story clarity, emotional engagement and audience interpretation."
    },
    
    {
    icon:<FaLock size={40}/>,
    title:"DRM Protected Content",
    desc:"Secure streaming with watermarking and controlled viewing access."
    },
    
    {
    icon:<FaGlobe size={40}/>,
    title:"Global Audience Access",
    desc:"Test your content with audiences from different regions and cultures."
    },
    
    {
    icon:<FaRobot size={40}/>,
    title:"AI Sentiment Analysis",
    desc:"AI analyzes audience feedback to measure emotional reactions and engagement."
    }
    
    ]
    
    return(
    
    <div className="featuresSection">
    
    <h2 className="sectionTitle">
    Platform Capabilities
    </h2>
    
    <p className="sectionSubtitle">
    ScreenLab provides creators with powerful tools to test,
    analyze and improve media content before release.
    </p>
    
    <div className="featureGrid">
    
    {features.map((feature,index)=>(
    
    <div key={index} className="featureCard">
    
    <div className="featureIcon">
    {feature.icon}
    </div>
    
    <h3>
    {feature.title}
    </h3>
    
    <p>
    {feature.desc}
    </p>
    
    <button className="featureBtn">
    Learn More
    </button>
    
    </div>
    
    ))}
    
    </div>
    
    </div>
    
    )
    
    }
    
    export default FeatureCards