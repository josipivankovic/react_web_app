import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pocetna from "./pages/Pocetna";
import Oglasi from "./pages/Oglasi";
import Kontakt from "./pages/Kontakt";
import DodajOglas from "./pages/DodajOglas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pokemon from "./pages/Pokemon";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/oglasi" element={<Oglasi />} />
          <Route path="/dodaj" element={<DodajOglas />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
