import React, { useState } from "react";

interface OglasProps {
  id: number;
  naziv: string;
  cijena: string;
  lokacija: string;
  slika: string;
  onDelete: (id: number) => void;
  onEdit: (id: number, noviNaziv: string) => void;
}

const OglasKartica: React.FC<OglasProps> = ({
  id,
  naziv,
  cijena,
  lokacija,
  slika,
  onDelete,
  onEdit,
}) => {
  const [uredujeSe, setUredujeSe] = useState(false);
  const [noviNaziv, setNoviNaziv] = useState(naziv);

  const handleEdit = () => {
    if (uredujeSe) {
      onEdit(id, noviNaziv);
    }
    setUredujeSe(!uredujeSe);
  };

  return (
    <div className="oglas-kartica">
      <img src={`/public/${slika}`} alt={naziv} />
      {uredujeSe ? (
        <input
          value={noviNaziv}
          onChange={(e) => setNoviNaziv(e.target.value)}
        />
      ) : (
        <h4>{naziv}</h4>
      )}
      <p>{cijena}</p>
      <p>{lokacija}</p>
      <div className="akcije">
        <button onClick={handleEdit}>
          {uredujeSe ? "Spremi" : "Uredi"}
        </button>
        <button onClick={() => onDelete(id)}>Obriši</button>
      </div>
    </div>
  );
};

export default OglasKartica;
