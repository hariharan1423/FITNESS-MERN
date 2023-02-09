const Nav = () => {
  return (
    <div className="nav">
      <span className="name">Gym Bro!</span>
      <div className="list">
        <ul>
          <li>
            <button href="home.html">HOME</button>
          </li>
          <li>
            <button href="blog.html">FITNESS BLOG</button>
          </li>
          <li>
            <button href="work.html">WORKOUT PLANS</button>
          </li>
          <li>
            <button href="diet.html">DIET</button>
          </li>
          <li>
            <button href="about.html">ABOUT</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
