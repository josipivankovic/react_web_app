import './LoginModal.css';

interface LoginModalProps {
  onClose: () => void;
}

function LoginModal({ onClose }: LoginModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Prijava</h2>
        <form>
        <h2 className="modal-title">Prijava</h2>

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Lozinka" required />
          <button type="submit">Prijavi se</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
