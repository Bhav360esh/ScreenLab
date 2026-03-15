function ParallaxSection({image,title,subtitle}){

    return(
    
    <div
    className="parallax"
    style={{backgroundImage:`url(${image})`}}
    >
    
    <div className="overlay">
    
    <h1>{title}</h1>
    <p>{subtitle}</p>
    
    </div>
    
    </div>
    
    );
    
    }
    
    export default ParallaxSection;