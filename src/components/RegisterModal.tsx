import './RegisterModal.css';

interface RegisterModalProps {
  onClose: () => void;
}

function RegisterModal({ onClose }: RegisterModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Registracija</h2>
        <form>
          <input type="text" placeholder="Ime i prezime" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Lozinka" required />
          <button type="submit">Registruj se</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
