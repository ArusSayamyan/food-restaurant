import styles from "./menu.module.scss";

//IMAGES
import Cookies from "../../starter/Cookies.jpg";
import Tiramisu from "../../starter/tiramisu.jpg";
import Brulee from "../../starter/Creme-Brulee.jpg";
import iceCream from "../../starter/ice-cream.jpg";
import salame from "../../starter/salame.jpg";
import pizza2 from "../../starter/capricciosa.jpg";
import pizza3 from "../../starter/foto-x-sito.jpg";
import Lasagna from "../../starter/Lasagna.jpg";
import spagetti from "../../starter/spagetti.jpg_large";

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
            <img
              src={Brulee}
              alt="chocolate_cookies"
              className={styles.brulee}
            />
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
            <img
              src={iceCream}
              alt="chocolate_cookies"
              className={styles.brulee}
            />
            <div>
              <p className={styles.menuList}>Ice cream 2</p>
              <p className={styles.description}>
                Choose from: cream, chocolate, lemon, strawberries, banana,
                melon, hazelnut
              </p>
            </div>
          </div>
          <span>$6.00</span>
        </div>
      </div>

      <div className={styles.promotions}>
        <h1>Pizza</h1>
        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Pizza Margherita</p>
            <p className={styles.description}>
              Tomato sauce, oregano, garlic and fresh basil
            </p>
          </div>
          <span>$8.00</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.item3}>
            <img
              src={salame}
              alt="chocolate_cookies"
              className={styles.brulee}
            />
            <div>
              <p className={styles.menuList}>Pizza al Salame</p>
              <p className={styles.description}>
                Tomato sauce, mozzarella, salami sausage, mixed green and black
                olives and basil
              </p>
            </div>
          </div>
          <span>$8.00</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Calzone</p>
            <p className={styles.description}>
              Folded pizza with tomato, mozzarella, ricotta cheese, ham, salami,
              extra virgin olive oil, parmesan and fresh basil.
            </p>
          </div>
          <span>$11.00</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.item3}>
            <img
              src={pizza2}
              alt="chocolate_cookies"
              className={styles.brulee}
            />
            <div>
              <p className={styles.menuList}>Pizza Capricciosa</p>
              <p className={styles.description}>
                Tomato sauce, mozzarella, ham, artichoke, black olives, parmesan
                and basil, Tomato sauce, mozzarella, ham, artichoke, black
                olives, parmesan and basil
              </p>
            </div>
          </div>
          <span>$9.00</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.item3}>
            <img
              src={pizza3}
              alt="chocolate_cookies"
              className={styles.brulee}
            />
            <div>
              <p className={styles.menuList}>Pizza Prosciutto e Funghi</p>
              <p className={styles.description}>
                Tomato sauce, mozzarela, prosciutto, mushrooms, basil
              </p>
            </div>
          </div>
          <span>$8.00</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Pizza Pronto</p>
            <p className={styles.description}>
              Splitted half / half. For each half you can choose your own
              toppings
            </p>
          </div>
          <span>$10.00</span>
        </div>
      </div>

      <div className={styles.promotions}>
        <h1>Pizza (Dinner menu)</h1>
        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Pizza Margherita</p>
            <p className={styles.description}>
              Tomato sauce, oregano, garlic and fresh basil
            </p>
          </div>
          <span>$8.00</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Pizza Capricciosa</p>
            <p className={styles.description}>
              Tomato sauce, mozzarella, ham, artichoke, black olives, parmesan
              and basil,
            </p>
          </div>
          <span>$9.00</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Pizza al Salame</p>
            <p className={styles.description}>
              Tomato sauce, mozzarella, salami sausage, mixed green and black
              olives and basil
            </p>
          </div>
          <span>$8.00</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Pizza Primavera</p>
            <p className={styles.description}>
              Tomato sauce, mozzarella, red peppers, mashrooms, black olives,
              sweet corn, onions
            </p>
          </div>
          <span>$9.00</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Calzone</p>
            <p className={styles.description}>
              Folded pizza with tomato, mozzarella, ricotta cheese, ham, salami,
              extra virgin olive oil, parmesan and fresh basil.
            </p>
          </div>
          <span>$11.00</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Pizza Prosciutto e Funghi</p>
            <p className={styles.description}>
              Tomato sauce, mozzarela, prosciutto, mushrooms, basil
            </p>
          </div>
          <span>$8.00</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Pizza Pronto</p>
            <p className={styles.description}>
              Splitted half / half. For each half you can choose your own
              toppings.
            </p>
          </div>
          <span>$10.00</span>
        </div>
      </div>

      <div className={styles.promotions}>
        <h1>Pasta</h1>

        <div className={styles.itemsList}>
          <div className={styles.item3}>
            <img
              src={Lasagna}
              alt="chocolate_cookies"
              className={styles.brulee}
            />
            <div>
              <p className={styles.menuList}>Traditional Lasagna</p>
              <p className={styles.description}>
                Home made pasta, ground beef, tomato sauce, bechamel sauce and
                parmesan.
              </p>
            </div>
          </div>
          <span>$11.00</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.item3}>
            <img
              src={spagetti}
              alt="chocolate_cookies"
              className={styles.brulee}
            />
            <div>
              <p className={styles.menuList}>Spaghetti Pomodoro</p>
              <p className={styles.description}>
                Spaghetti, tomatoes, mushrooms, garlic, basil
              </p>
            </div>
          </div>
          <span>$9.00</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Spaghetti carbonara</p>
            <p className={styles.description}>
              Spaghetti, bacon, egg, garlic, parsley
            </p>
          </div>
          <span>$15.00</span>
        </div>
      </div>

      <div className={styles.promotions}>
        <h1>Coffee</h1>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Espresso</p>
          </div>
          <span>$1.75</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Latte</p>
          </div>
          <span>$1.75</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Cappuccino</p>
          </div>
          <span>$1.50</span>
        </div>
      </div>

      <div className={styles.promotions}>
        <h1>Cold Drinks</h1>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Mineral Water</p>
          </div>
          <span>$1.95</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Tonic Water</p>
          </div>
          <span>$1.70</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Coca Cola 2</p>
          </div>
          <span>$1.70</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Orange Juice</p>
          </div>
          <span>$1.70</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Apple Juice</p>
          </div>
          <span>$1.70</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Lemonade</p>
          </div>
          <span>$1.70</span>
        </div>

        <div className={styles.itemsList}>
          <div className={styles.firstItem}>
            <p className={styles.menuList}>Pineapple Juice</p>
          </div>
          <span>$2.00</span>
        </div>
      </div>
    </main>
  );
};
export default MenuPage;
