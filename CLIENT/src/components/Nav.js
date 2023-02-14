import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <span className="name">Gym Bro!</span>
      <div className="list">
        <ul>
          <li>
            <NavLink to="/" className="Nav-link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="Blog" className="Nav-link">
              FITNESS BLOG
            </NavLink>
          </li>
          <li>
            <NavLink to="Workout" className="Nav-link">
              WORKOUT PLANS
            </NavLink>
          </li>
          <li>
            <NavLink to="Diet" className="Nav-link">
              DIET
            </NavLink>
          </li>
          <li>
            <NavLink to="About" className="Nav-link">
              ABOUT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
