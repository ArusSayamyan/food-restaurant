import styles from'./App.module.scss';
import HeaderLogo  from "./starter/logo.png";


const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <div className={styles.header_content}>
          <div>
            <img src={HeaderLogo} alt="HeaderLogo" className={styles.HeaderLogo}/>
          </div>
          <div className={styles.navbar}>
            <ul className={styles.list}>
              <li>HOME</li>
              <li>MENU</li>
            </ul>
          </div>
        </div>
      </header>
      <main className={styles.App_content} >
        <div className={styles.main_content}>
          <h1><span>__</span>Italian food delivery<span>__</span></h1>
          <h1 className={styles.title}>Restaurant Pronto</h1>
          <div className={styles.buttons}>
          <button className={styles.tableButton}>Table Reservations</button>
          <button className={styles.OrderButton}>See MENU & Order</button>
          </div>
          

          
        </div>

      </main>
    </div>
  );
}

export default App;
