import s from './Modal.module.css';

export default function Modal({ children, onClose }) {
  const handlebackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.Overlay} onClick={handlebackdropClick}>
      <div className={s.Modal}>{children}</div>
    </div>
  );
}
