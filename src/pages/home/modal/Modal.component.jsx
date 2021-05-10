import styles from "./modal.module.scss";

const Modal = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <h1>Restaurant Pronto</h1>
      </header>
      <main className={styles.main_content}>
        <div className={styles.form_content}>
          <h1>ЗАКАЗ СТОЛИКОВ</h1>
          <form>
            <select id="country" name="country">
              <option value="количество гостей">количество гостей</option>
            </select>
            <select id="country" name="country">
              <option value="australia">Дата</option>
            </select>
            <select id="country" name="country">
              <option value="australia">Время</option>
            </select>
            <textarea placeholder="Комментарий (необязательно)" />
          </form>
        </div>
      </main>
      <footer>
        <div className={styles.footer_container}>
          <p>
            Стол хранится 15 минут после оговоренного времени. Будем
            признательны если придете вовремя.
          </p>
          <button>Далее</button>
        </div>
      </footer>
    </div>
  );
};
export default Modal;
