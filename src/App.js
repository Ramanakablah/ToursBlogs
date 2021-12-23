import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from "./Components/JSX/Navbar"
import Face from "./Components/JSX/Face"
import Login from "./Components/JSX/Login"
import Blog from "./Components/JSX/Blog"
import Profile from "./Components/JSX/Profile "
import Signup from "./Components/JSX/Signup"
import Blogcontext from "./Components/Context/Blogcontext";
import Newblog from "./Components/JSX/Newblog";
import OTP from "./Components/JSX/OTP";
import Naksha from "./Components/JSX/Naksha";
import ParallaxProvider from "react-scroll-parallax/cjs/components/ParallaxProvider";

function App() {
  return (
    <>
    <Blogcontext>
      <ParallaxProvider>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/about" element={<Face/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/add" element={<Newblog/>} />
      <Route path="/authentication" element={<OTP/>} />
      <Route path="/map" element={<Naksha/>} />
      </Routes>
    </Router>
      </ParallaxProvider>
    </Blogcontext>
    </>
  );
}

export default App;
