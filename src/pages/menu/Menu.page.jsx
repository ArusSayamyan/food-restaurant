import styles from "./menu.module.scss";

//IMAGES
import Cookies from "../../starter/Cookies.jpg"
import Tiramisu from "../../starter/tiramisu.jpg"
import Brulee from "../../starter/Creme-Brulee.jpg"
import iceCream from "../../starter/ice-cream.jpg"

const MenuPage = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.menuContent}>
        <h1 className={styles.title}>Menu</h1>
      </div>
      <div className={styles.promotions}>
        <h1>Promotions</h1>
        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Monday-Friday lunch menu</p>
            <p className={styles.description}>Large Pizza Diavola & Cola</p>
          </div>
          <span>$9.00</span>
        </div>
        <div className={styles.itemsList}>
          <div className={styles.secondItem}>
            <p className={styles.menuList}>Dish of the day: Tagliatelle</p>
            <p className={styles.description}>
              Tagliatelle with spinach, mascarpone & Parmesan
            </p>
          </div>
          <span>$6.50</span>
        </div>
      </div>

      <div className={styles.promotions}>
        <h1>Desserts</h1>
        <div className={styles.itemsList}>
          <div className={styles.item1}>
            <img src={Cookies} alt="chocolate_cookies" />
            <p className={styles.menuList}>Chocolate Cookies</p>
          </div>
          <span>$5.00</span>
        </div>
        <div className={styles.itemsList}>
          <div className={styles.item1}>
            <img src={Tiramisu} alt="chocolate_cookies" />

            <p className={styles.menuList}>Tiramisu</p>
          </div>
          <span>$5.00</span>
        </div>

        <div className={styles.itemsList}>
       
          <div className={styles.item3}>
          <img src={Brulee} alt="chocolate_cookies" className={styles.brulee}/>
<div>
            <p className={styles.menuList}>Lemon Creme Brulee</p>
            <p className={styles.description}>
            Lemon flavoured crème brulee with strawberries and blueberries
            </p>
            </div>
          </div>
          <span>$5.50</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.item3}>
          <img src={iceCream} alt="chocolate_cookies" className={styles.brulee}/>
          <div>
            <p className={styles.menuList}>Ice cream 2</p>
            <p className={styles.description}>
            Choose from: cream, chocolate, lemon, strawberries, banana, melon, hazelnut
            </p>
            </div>
          </div>
          <span>$6.00</span>
        </div>
      </div>
    </main>
  );
};
export default MenuPage;
