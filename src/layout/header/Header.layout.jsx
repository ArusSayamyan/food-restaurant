import styles from "./header.module.scss";
import { useHistory } from "react-router-dom";
import HeaderLogo from "src/starter/logo.png";

const Header = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/menu");
  };
  const handleClickHome = () => {
    history.push("/home");
  };
  return (
    <header className={styles.App_header}>
      <div className={styles.header_content}>
        <div>
          <img
            onClick={handleClickHome}
            src={HeaderLogo}
            alt="HeaderLogo"
            className={styles.HeaderLogo}
          />
        </div>
        <div className={styles.navbar}>
          <ul className={styles.list}>
            <li onClick={handleClickHome} className="u-cursor--pointer">
              HOME
            </li>
            <li onClick={handleClick} className="u-cursor--pointer">
              MENU
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
