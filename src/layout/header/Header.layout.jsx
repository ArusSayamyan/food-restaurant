import styles from "./header.module.scss";
// import HeaderLogo from "../../starter/logo.png";
import HeaderLogo from "src/starter/logo.png";

const Header = () => {
    return (
        <header className={styles.App_header}>
        <div className={styles.header_content}>
          <div>
            <img
              src={HeaderLogo}
              alt="HeaderLogo"
              className={styles.HeaderLogo}
            />
          </div>
          <div className={styles.navbar}>
            <ul className={styles.list}>
              <li>HOME</li>
              <li>MENU</li>
            </ul>
          </div>
        </div>
      </header>

    )
}
export default  Header;