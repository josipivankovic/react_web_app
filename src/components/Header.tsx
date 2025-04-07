import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  const [modalType, setModalType] = useState<"login" | "register" | null>(null);

  const closeModal = () => setModalType(null);

  return (
    <header className="header">
      <div className="top-bar">
        <button onClick={() => setModalType("login")}>Prijava</button>
        <button onClick={() => setModalType("register")}>Registracija</button>
      </div>

      <div className="main-bar">
        <Link to="/" className="logo">AutoOglasi</Link>
        <input type="text" placeholder="Pretraži oglase..." />
        <div className="desno">
          <button>Pretraži</button>
          <Link to="/oglasi"><button>Dodaj oglas</button></Link>
        </div>
      </div>

      <nav className="nav">
        <Link to="/">Početna</Link>
        <Link to="/oglasi">Oglasi</Link>
        <Link to="/kontakt">Kontakt</Link>
        <Link to="/pokemon">Pokemoni</Link> {/* OVDJE smo dodali novu stavku */}
      </nav>

      {/* MODAL */}
      {modalType && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalType === "login" ? "Prijava" : "Registracija"}</h3>
            <form>
              {modalType === "register" && (
                <input type="text" placeholder="Korisničko ime" />
              )}
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Lozinka" />
              <button type="submit">
                {modalType === "login" ? "Prijavi se" : "Registriraj se"}
              </button>
            </form>
            <button className="close-modal" onClick={closeModal}>✕</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;







