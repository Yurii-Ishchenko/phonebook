import s from './DeleteContact.module.css';
import Button from '../../Button/Button';
export default function DeleteContact({ onDelete, onCloseModal }) {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Are you sure?</h3>
      <div className={s.buttonContainer}>
        <div className={s.button}>
          <Button type="button" width="100px" height="40px" onClick={onDelete}>
            YES
          </Button>
        </div>
        <div className={s.button}>
          <Button
            type="button"
            width="100px"
            height="40px"
            onClick={onCloseModal}
          >
            NO
          </Button>
        </div>
      </div>
    </div>
  );
}
