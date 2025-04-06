import React, { useEffect, useState } from "react";
import "../App.css";

interface Oglas {
  id: number;
  naslov: string;
  opis: string;
  slika: string;
}

const Oglasi = () => {
  const [oglasi, setOglasi] = useState<Oglas[]>([]);
  const [urediOglas, setUrediOglas] = useState<Oglas | null>(null);

  const [form, setForm] = useState({
    naslov: "",
    opis: "",
    slika: "",
  });

  // UČITAJ iz LocalStorage kad se komponenta učita
  useEffect(() => {
    const spremljeniOglasi = localStorage.getItem("oglasi");
    if (spremljeniOglasi) {
      setOglasi(JSON.parse(spremljeniOglasi));
    }
  }, []);

  // SPREMI u LocalStorage kad god se oglasi promijene
  useEffect(() => {
    localStorage.setItem("oglasi", JSON.stringify(oglasi));
  }, [oglasi]);

  const handleDelete = (id: number) => {
    setOglasi(oglasi.filter((oglas) => oglas.id !== id));
  };

  const handleEdit = (oglas: Oglas) => {
    setUrediOglas(oglas);
    setForm({
      naslov: oglas.naslov,
      opis: oglas.opis,
      slika: oglas.slika,
    });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urediOglas) {
      // Ažuriranje oglasa
      setOglasi(
        oglasi.map((oglas) =>
          oglas.id === urediOglas.id ? { ...oglas, ...form } : oglas
        )
      );
      setUrediOglas(null);
    } else {
      // Novi oglas
      const noviOglas: Oglas = {
        id: Date.now(),
        naslov: form.naslov,
        opis: form.opis,
        slika: form.slika,
      };
      setOglasi([...oglasi, noviOglas]);
    }

    setForm({ naslov: "", opis: "", slika: "" });
  };

  return (
    <div className="oglasi-container">
      <h2>Aktivni oglasi</h2>
      <div className="oglasi-grid">
        {oglasi.map((oglas) => (
          <div key={oglas.id} className="oglas-kartica">
            <img src={oglas.slika} alt={oglas.naslov} />
            <h4>{oglas.naslov}</h4>
            <p>{oglas.opis}</p>
            <div className="akcije">
              <button onClick={() => handleEdit(oglas)}>Uredi</button>
              <button onClick={() => handleDelete(oglas.id)}>Obriši</button>
            </div>
          </div>
        ))}
      </div>

      <div className="forma-oglas">
        <h3>{urediOglas ? "Uredi oglas" : "Dodaj novi oglas"}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="naslov"
            placeholder="Naslov"
            value={form.naslov}
            onChange={handleFormChange}
            required
          />
          <textarea
            name="opis"
            placeholder="Opis"
            value={form.opis}
            onChange={handleFormChange}
            required
          />
          <input
            type="text"
            name="slika"
            placeholder="URL slike (npr. /audi.jpg)"
            value={form.slika}
            onChange={handleFormChange}
            required
          />
          <button type="submit">
            {urediOglas ? "Spremi promjene" : "Dodaj oglas"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Oglasi;




