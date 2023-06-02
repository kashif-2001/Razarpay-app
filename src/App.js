import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarTool from "./layouts/Navbar";
import Home from "./components/Home/Home";
import PageScrollProgressBar from "react-page-scroll-progress-bar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <PageScrollProgressBar color="#383CC1" bgColor="#f2f2f2" height="6px" />
        <NavbarTool />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
