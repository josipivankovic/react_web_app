import React, { useState } from "react";
import "./GalerijaSlika.css";

const slike = [
  "/mini.jpg",
  //"/mini1.jpg",
  "/mini2.jpg",
  "/mini3.jpg",
  "/mini4.jpg",
  "/mini5.jpg",
];

const GalerijaSlika = () => {
  const [trenutnaSlika, setTrenutnaSlika] = useState(0);

  const prethodna = () => {
    setTrenutnaSlika((prev) => (prev === 0 ? slike.length - 1 : prev - 1));
  };

  const sljedeca = () => {
    setTrenutnaSlika((prev) => (prev === slike.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="galerija">
      <div className="glavna-slika-container">
        <button className="strelica lijeva" onClick={prethodna}>
          ‹
        </button>
        <img
          src={slike[trenutnaSlika]}
          alt="Glavna slika"
          className="glavna-slika"
        />
        <button className="strelica desna" onClick={sljedeca}>
          ›
        </button>
      </div>

      <div className="male-slike">
        {slike.map((slika, index) => (
          <img
            key={index}
            src={slika}
            alt={`Mala slika ${index}`}
            className={`mala-slika ${
              trenutnaSlika === index ? "aktivna" : ""
            }`}
            onClick={() => setTrenutnaSlika(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GalerijaSlika;
