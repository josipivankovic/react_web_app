import './OpisProizvoda.css';

interface OpisProizvodaProps {
  naslov: string;
  cijena: string;
  lokacija: string;
  opis: string;
}

function OpisProizvoda({ naslov, cijena, lokacija, opis }: OpisProizvodaProps) {
  return (
    <>
        <h1>{naslov}</h1>
        <p><strong>Cijena:</strong> {cijena}</p>
        <p><strong>Lokacija:</strong> {lokacija}</p>
        <p>{opis}</p>
    </>
  );
}

export default OpisProizvoda;


