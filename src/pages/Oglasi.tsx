import React, { useEffect, useState } from "react";
import "../App.css";

interface Oglas {
  id: number;
  naslov: string;
  cijena: string;
  lokacija: string;
  opis: string;
  slika: string;
  kategorija: string;
}

const Oglasi = () => {
  const [oglasi, setOglasi] = useState<Oglas[]>([]);

  const dohvatiOglase = () => {
    fetch("http://localhost:8080/oglasi")
      .then((res) => res.json())
      .then((data) => setOglasi(data))
      .catch((err) => console.error("Greška pri dohvatu:", err));
  };

  const obrisiOglas = (id: number) => {
    fetch(`http://localhost:8080/obrisi/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setOglasi((prev) => prev.filter((oglas) => oglas.id !== id));
      })
      .catch((err) => console.error("Greška pri brisanju:", err));
  };

  useEffect(() => {
    dohvatiOglase();
  }, []);

  return (
    <div className="oglasi-container">
      <h2>Aktivni oglasi</h2>
      <div className="oglasi-grid">
        {oglasi.map((oglas) => (
          <div key={oglas.id} className="oglas-kartica">
            <img src={oglas.slika} alt={oglas.naslov} />
            <h4>{oglas.naslov}</h4>
            <p><strong>Cijena:</strong> {oglas.cijena}</p>
            <p><strong>Lokacija:</strong> {oglas.lokacija}</p>
            <p><strong>Kategorija:</strong> {oglas.kategorija}</p>
            <p>{oglas.opis}</p>
            <div className="akcije">
              {/* Dugme za brisanje */}
              <button onClick={() => obrisiOglas(oglas.id)}>Obriši</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Oglasi;
