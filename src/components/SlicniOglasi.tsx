import "./SlicniOglasi.css";

const slicni = [
  { naziv: "Mini Cooper One", cijena: "10.500 €", slika: "mini7.jpg" },
  { naziv: "Mini Countryman", cijena: "11.200 €", slika: "mini8.jpg" },
  { naziv: "Mini Clubman", cijena: "12.900 €", slika: "mini9.jpg" },
  { naziv: "Mini Cooper S", cijena: "13.400 €", slika: "mini10.jpg" },
  { naziv: "Mini Cooper JCW", cijena: "15.800 €", slika: "mini11.jpg" },
  { naziv: "Mini Electric", cijena: "17.500 €", slika: "mini12.jpg" },
];

function SlicniOglasi() {
  return (
    <div className="slicni-oglasi">
      <h3>Slični oglasi</h3>
      <div className="slicni-lista">
        {slicni.map((oglas, index) => (
          <div key={index} className="slicni-kartica">
            <img src={`/${oglas.slika}`} alt={oglas.naziv} />
            <h4>{oglas.naziv}</h4>
            <p>{oglas.cijena}</p>
            <button onClick={() => alert(`Otvorio bi oglas: ${oglas.naziv}`)}>
              Pogledaj oglas
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlicniOglasi;

