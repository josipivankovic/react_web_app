import { useState } from "react";

function DodajOglas() {
  const [naslov, setNaslov] = useState("");
  const [cijena, setCijena] = useState("");
  const [lokacija, setLokacija] = useState("");
  const [opis, setOpis] = useState("");
  const [slika, setSlika] = useState("");
  const [kategorija, setKategorija] = useState("Automobili");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const noviOglas = {
      naslov,
      cijena,
      lokacija,
      opis,
      slika,
      kategorija,
    };

    try {
      const res = await fetch("http://localhost:8080/dodaj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noviOglas),
      });

      if (res.ok) {
        alert("✅ Oglas uspješno dodan!");
        setNaslov("");
        setCijena("");
        setLokacija("");
        setOpis("");
        setSlika("");
        setKategorija("Automobili");
      } else {
        alert("❌ Greška pri dodavanju oglasa.");
      }
    } catch (err) {
      alert("❌ Nema veze s backendom. Provjeri je li server upaljen.");
      console.error(err);
    }
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
          margin: "0 auto",
        }}
      >
        <input
          placeholder="Naslov"
          value={naslov}
          onChange={(e) => setNaslov(e.target.value)}
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
          placeholder="Slika (npr. mini.jpg)"
          value={slika}
          onChange={(e) => setSlika(e.target.value)}
          required
        />
        <select
          value={kategorija}
          onChange={(e) => setKategorija(e.target.value)}
          required
        >
          <option value="Automobili">Automobili</option>
          <option value="Motori">Motori</option>
          <option value="Dijelovi">Dijelovi</option>
          <option value="Ostalo">Ostalo</option>
        </select>
        <button type="submit">Dodaj oglas</button>
      </form>
    </div>
  );
}

export default DodajOglas;
