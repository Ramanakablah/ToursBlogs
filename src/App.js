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
import Naksha from "./Components/JSX/Naksha";
import ParallaxProvider from "react-scroll-parallax/cjs/components/ParallaxProvider";
import Trypage from "./Components/JSX/Trypage";
import Settings from "./Components/JSX/Settings";

function App() {
  return (
    <>
      <Blogcontext>
        <ParallaxProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/about" element={<Face />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/map" element={<Naksha />} />
              <Route path="/flip" element={<Trypage />} />
              <Route path="/setting" element={<Settings/>} />
            </Routes>
          </Router>
        </ParallaxProvider>
      </Blogcontext>
    </>
  );
}

export default App;
