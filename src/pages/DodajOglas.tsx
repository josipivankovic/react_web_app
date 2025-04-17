import { useState } from "react";
import { useOglasi } from "../context/OglasiContext";

function DodajOglas() {
  const { dodajOglas } = useOglasi();

  const [naziv, setNaziv] = useState("");
  const [cijena, setCijena] = useState("");
  const [lokacija, setLokacija] = useState("");
  const [opis, setOpis] = useState("");
  const [slika, setSlika] = useState("");
  const [kategorija, setKategorija] = useState("Automobili");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const noviOglas = {
      id: Date.now(),
      naziv,
      cijena,
      lokacija,
      opis,
      slika,
      kategorija,
    };

    dodajOglas(noviOglas);
    alert("Oglas dodan!");

    // Reset
    setNaziv("");
    setCijena("");
    setLokacija("");
    setOpis("");
    setSlika("");
    setKategorija("Automobili");
  };

  return (
    <div className="page-container">
      <h2 style={{ marginBottom: "20px" }}>Dodaj novi oglas</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "500px",
          padding: "20px",
          margin: "0 auto",
          backgroundColor: "#f4f4f4",
          borderRadius: "10px",
        }}
      >
        <input
          placeholder="Naziv oglasa"
          value={naziv}
          onChange={(e) => setNaziv(e.target.value)}
          required
        />
        <input
          placeholder="Cijena"
          value={cijena}
          onChange={(e) => setCijena(e.target.value)}
          required
        />
        <input
          placeholder="Lokacija"
          value={lokacija}
          onChange={(e) => setLokacija(e.target.value)}
          required
        />
        <textarea
          placeholder="Opis"
          value={opis}
          onChange={(e) => setOpis(e.target.value)}
          required
        />
        <input
          placeholder="Slika (npr. mini7.jpg)"
          value={slika}
          onChange={(e) => setSlika(e.target.value)}
          required
        />

        {/* Dropdown za kategoriju */}
        <select
          value={kategorija}
          onChange={(e) => setKategorija(e.target.value)}
          required
          style={{ padding: "8px" }}
        >
          <option value="Automobili">Automobili</option>
          <option value="Motori">Motori</option>
          <option value="Dijelovi">Dijelovi</option>
          <option value="Ostalo">Ostalo</option>
        </select>

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Dodaj oglas
        </button>
      </form>
    </div>
  );
}

export default DodajOglas;
