import styles from "./footer.module.scss";
import {useHistory} from "react-router-dom";

const Footer = () => {

  const history = useHistory();
  const handleClick = () => {
    history.push("/menu");
  };
  const handleClickHome = () => {
    history.push("/home");
  };
    return (
        <footer>
        <div  className={styles.footerContent}>
        <div className={styles.info}>
          <h1>Useful Links</h1>
          <p className="u-cursor--pointer" onClick={handleClickHome}>Home</p>
          <p className="u-cursor--pointer" onClick={handleClick}>Menu</p>
        </div>
        <div className={styles.info}>
          <h1>Contact Us</h1>
          <p>100 Tenth Avenue, New York City, NY 1001</p>
          <p>Phone: (044) 359 0173</p>
        </div>
        <div className={styles.info}>
          <h1>Opening Hours</h1>
          <p>Monday – Sunday: 5PM – 10PM</p>
          <p>Tuesday – Friday: 11AM – 2PM</p>
        </div>
        </div>
        </footer>
    )
}
export default Footer;