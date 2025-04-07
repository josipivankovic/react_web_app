import { useState } from "react";
import { useOglasi } from "../context/OglasiContext";

function DodajOglas() {
  const { dodajOglas } = useOglasi();

  const [naziv, setNaziv] = useState("");
  const [cijena, setCijena] = useState("");
  const [lokacija, setLokacija] = useState("");
  const [opis, setOpis] = useState("");
  const [slika, setSlika] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const noviOglas = {
      id: Date.now(), // generira jedinstveni ID
      naziv,
      cijena,
      lokacija,
      opis,
      slika
    };

    dodajOglas(noviOglas);
    alert("Oglas dodan!");

    // Resetiraj polja nakon dodavanja
    setNaziv("");
    setCijena("");
    setLokacija("");
    setOpis("");
    setSlika("");
  };

  return (
    <div className="page-container">
      <h2>Dodaj novi oglas</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "500px",
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
          placeholder="Slika (npr. mini8.jpg)"
          value={slika}
          onChange={(e) => setSlika(e.target.value)}
          required
        />
        <button type="submit">Dodaj oglas</button>
      </form>
    </div>
  );
}

export default DodajOglas;
