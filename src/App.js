import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Diet from "../src/pages/Diet";
import Workout from "../src/pages/Workout";
import Blog from "../src/pages/Blog";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Diet" element={<Diet />}></Route>
          <Route path="Workout" element={<Workout />}></Route>
          <Route path="Blog" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
