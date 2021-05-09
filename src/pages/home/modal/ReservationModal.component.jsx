
import styles from "./reservation-modal.module.scss";

const ReservationModal = (props) => {
  const {children, onClose} = props;
    return (
            <div className={styles.container}>
            <div className={styles.content}>
            {children}
            <button onClick={onClose}>Close</button>
            </div>
          

        </div>
      )

    
}
export default ReservationModal;