import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
    } from "chart.js";
    
    import { Bar, Line, Doughnut } from "react-chartjs-2";
    import "../styles/global.css";
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
    );
    
    function InsightsGraph(){
    
    /* Audience sentiment */
    
    const sentimentData = {
    labels:["Positive","Neutral","Negative"],
    datasets:[
    {
    label:"Audience Sentiment",
    data:[68,20,12],
    backgroundColor:["#00A8E1","#ffc107","#ff4d4d"]
    }
    ]
    };
    
    /* Engagement trend */
    
    const engagementData = {
    labels:["Week1","Week2","Week3","Week4","Week5"],
    datasets:[
    {
    label:"Viewer Engagement %",
    data:[40,55,65,70,82],
    borderColor:"#00A8E1",
    backgroundColor:"#00A8E1"
    }
    ]
    };
    
    /* Story comprehension */
    
    const comprehensionData = {
    labels:[
    "Story Clarity",
    "Emotional Impact",
    "Message Understanding",
    "Brand Recall"
    ],
    datasets:[
    {
    label:"Score %",
    data:[78,82,74,69],
    backgroundColor:"#00A8E1"
    }
    ]
    };
    
    /* Audience demographics */
    
    const demographicsData = {
    labels:["18-24","25-34","35-44","45+"],
    datasets:[
    {
    label:"Audience %",
    data:[35,40,15,10],
    backgroundColor:[
    "#00A8E1",
    "#0077b6",
    "#48cae4",
    "#90e0ef"
    ]
    }
    ]
    };
    
    return(
    
    <div className="analyticsSection">
    
    <h2 className="sectionTitle">
    Audience Analytics Dashboard
    </h2>
    
    <div className="graphGrid">
    
    <div className="graphCard">
    <h3>Sentiment Analysis</h3>
    <Doughnut data={sentimentData}/>
    </div>
    
    <div className="graphCard">
    <h3>Engagement Trend</h3>
    <Line data={engagementData}/>
    </div>
    
    <div className="graphCard">
    <h3>Content Insight Scores</h3>
    <Bar data={comprehensionData}/>
    </div>
    
    <div className="graphCard">
    <h3>Audience Demographics</h3>
    <Doughnut data={demographicsData}/>
    </div>
    
    </div>
    
    </div>
    
    )
    
    }
    
    export default InsightsGraph