import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/global.css";
import A from "../assets/1.jpeg";
import B from "../assets/2.jpeg";
import C from "../assets/3.jpeg";
import D from "../assets/4.jpeg";
import E from "../assets/5.jpeg";
import F from "../assets/6.jpeg";
import G from "../assets/7.jpeg";

function TeamCarousel() {

  const team = [
    {
      name: "Kanak",
      role: "CEO",
      company: "ScreenLab",
      img: A
    },
    {
      name: "Anjali Tripathi",
      role: "Business & Tech",
      company: "ScreenLab",
      img: B
    },
    {
      name: "Khahish",
      role: "UI/UX Designer",
      company: "ScreenLab",
      img: C
    },
    {
      name: "Sangha Mitra",
      role: "Revenue & Finances",
      company: "ScreenLab",
      img: D
    },
    {
      name: "Mansi",
      role: "Risk & Legal Management",
      company: "ScreenLab",
      img: E
    },
    {
      name: "Kristy",
      role: "Marketing Strategist",
      company: "ScreenLab",
      img: F
    },
    {
      name: "Chetna",
      role: "Product Management",
      company: "ScreenLab",
      img: G
    }
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <div className="teamSection">

      <h2>Meet the Team</h2>

      <Carousel responsive={responsive} infinite>

        {team.map((member, index) => (

          <div className="teamCard" key={index}>

            <img 
              src={member.img} 
              alt={member.name} 
              className="teamImg"
            />

            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="company">{member.company}</p>

          </div>

        ))}

      </Carousel>

    </div>
  );
}

export default TeamCarousel;