
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Professional from "./pages/Professional";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen flex-col">

        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route
              path="/perfil-profesional"
              element={<Professional />}
            />
            <Route path="/proyectos" element={<Projects />} />
            <Route
              path="/certificaciones"
              element={<Certifications />}
            />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </HashRouter>
  );
}
