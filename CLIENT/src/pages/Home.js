import Footer from "../components/Footer";
import Copyrt from "../components/Copyrt";
import Description from "../components/Description";
import Container from "../components/Container";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Description />
      <Container />
      <div className="descrp2">
        <h1>Hyped up??? Wanna Know Your Weight Levels???</h1>
        <NavLink className="Diet-link" to="Diet">
          Click Here!!!
        </NavLink>
      </div>
      <br />
      <br />
      <Footer />
      <Copyrt />
    </div>
  );
};

export default Home;
