
import styles from "./reservation-modal.module.scss";

const ReservationModal = (props) => {
  const {children, onClose} = props;
    return (
            <div className={styles.container}>
            <div className={styles.content}>
            {children}
            </div>
            <button onClick={onClose} className={styles.close}>Close</button>
        </div>
      )

    
}
export default ReservationModal;