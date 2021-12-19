import s from './Button.module.css';

export default function Button({
  children,
  type = 'button',
  onClick = () => null,
  width,
  height,
}) {
  const styles = {
    width,
    height,
  };

  return (
    <button type={type} className={s.btn} style={styles} onClick={onClick}>
      {children}
    </button>
  );
}
