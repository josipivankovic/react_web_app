import './KontaktForma.css';
import { useState } from 'react';

function KontaktForma() {
  const [ime, setIme] = useState('');
  const [email, setEmail] = useState('');
  const [poruka, setPoruka] = useState('');
  const [poslano, setPoslano] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Ime:', ime);
    console.log('Email:', email);
    console.log('Poruka:', poruka);
    setPoslano(true);
    // Resetiraj formu (nije obavezno)
    setIme('');
    setEmail('');
    setPoruka('');
  };

  return (
    <div className="kontakt-container">
      <h2>Kontaktiraj prodavača</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Vaše ime"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Vaš email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Poruka"
          value={poruka}
          onChange={(e) => setPoruka(e.target.value)}
          required
        />
        <button type="submit">Pošalji upit</button>
        {poslano && <p className="potvrda">Poruka je poslana!</p>}
      </form>
    </div>
  );
}

export default KontaktForma;
