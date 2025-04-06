import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pocetna from "./pages/Pocetna";
import Oglasi from "./pages/Oglasi";
import Kontakt from "./pages/Kontakt";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <Header />
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/oglasi" element={<Oglasi />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;















