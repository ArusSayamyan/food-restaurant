import styles from "./App.module.scss";
import HeaderLogo from "./starter/logo.png";
import About1 from "./starter/about-1.jpg";
import About2 from "./starter/about-2.jpg";

import Galery1 from "./starter/gallery-1.jpg";
import Galery2 from "./starter/gallery-2.jpg";
import Galery3 from "./starter/gallery-3.jpg";

import Galery4 from "./starter/gallery-4.jpg";
import Galery5 from "./starter/gallery-5.jpg";
import Galery6 from "./starter/gallery-6.jpg";

import Galery7 from "./starter/gallery-7.jpg";
import Galery8 from "./starter/gallery-8.jpg";
import Galery9 from "./starter/gallery-9.jpg";
import BgImg from "./starter/food-delivery.jpg";

const App = () => {
  return (
    <div className={styles.App}>
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
      <main className={styles.App_content}>
        <div className={styles.main_content}>
          <h1>
            <span>__</span>Italian food delivery<span>__</span>
          </h1>
          <h1 className={styles.title}>Restaurant Pronto</h1>
          <div className={styles.buttons}>
            <button className={styles.tableButton}>Table Reservations</button>
            <button className={styles.OrderButton}>See MENU & Order</button>
          </div>
        </div>
      </main>
      <section className={styles.sectionContent}>
        <div className={styles.secondPage}>
          <div className={styles.article}>
            <h1>We Are Pronto NY</h1>
            <h2>__ ABOUT US</h2>
            <p>
              At Restaurant Pronto we pride ourselves with the ability to offer
              our customers delicious and authentic Italian food, created at the
              highest standards. Every single meal we make is unique. We
              guarantee that you won’t get disappointed.
            </p>
            <p>
              {" "}
              The key to our success is simple: providing exquisite meals, made
              out of only the purest and freshest of ingredients that taste
              great every single time.
            </p>
            <p>
              Our goal is to help you enjoy the little things in life that
              matter. So eat delicious food. Grab a drink. But most of all,
              relax! We thank you from the bottom of our hearts for your
              continued support.
            </p>
          </div>
          <div>
            <img src={About1} alt="About1" />
          </div>
          <div>
            <img src={About2} alt="About1" />
          </div>
        </div>
        <div className={styles.thirdPage}>
          <div className={styles.content}>
            <div className={styles.firstMenu}>
              <h1>Best Friends Deal</h1>
              <span>__SHARING IS CARING</span>
              <p>2 Medium Pizzas</p>
              <p>Soft Drinks</p>
              <p>Garlic Bread or Potato Wedges</p>
              <p>Salad to share</p>
              <div className={styles.price}>Only $20</div>
            </div>
            <div className={styles.secondMenu}>
              <h1>Buy 1 Get 1 FREE</h1>
              <span>__THIS WEEK ONLY</span>
              <p>
                Hope you are hungry. Buy one regular priced pizza online and get
                a second pizza totally free!
              </p>
              <p>Online only!</p>

              <div className={styles.price}>Order code: 7867</div>
            </div>
            <div className={styles.thirdMenu}>
              <h1>Awesome Foursome</h1>
              <span>__SUNDAYS ONLY</span>
              <p>
                6 Delicious regular size pizzas to choose from: Margherita,
                Capricciosa, Prosciutto e Funghi, Diavola, Calzone, Primavera.
              </p>
              <div className={styles.price}>Only $40</div>
            </div>
          </div>
        </div>
        <div className={styles.fourPage}>
          <div className={styles.description}>
            <h1>Delicious Italian Food</h1>
            <p>___ Delicious Italian Food</p>
          </div>
          <div className={styles.foodTable}>
            <img src={Galery1} alt="gallery-item" />
            <img src={Galery2} alt="gallery-item" />
            <img src={Galery3} alt="gallery-item" />
            <img src={Galery4} alt="gallery-item" />
            <img src={Galery5} alt="gallery-item" />
            <img src={Galery6} alt="gallery-item" />
            <img src={Galery7} alt="gallery-item" />
            <img src={Galery8} alt="gallery-item" />
            <img src={Galery9} alt="gallery-item" />
          </div>
        </div>
        <div className={styles.fivePage}>
          <div className={styles.pageContent}>
            <h1>catering</h1>
            <span>___ PARTY TIME</span>

            <p>
              Restaurant Pronto can cater to any party or event irrespective of
              how big or small. We specialize in catering with personalised
              service and special menus on request. In our menu palette, you’ll
              discover unique and sophisticated tastes - all of which will help
              you uncover the true greatness of the Italian cuisine.
            </p>
            <h2>Tell us about your event at office@pronto-wp.com</h2>
          </div>
        </div>
        <div className={styles.sixPage}>
          <div className={styles.content}>
            <div className={styles.article}>
              <h1>Food Delivery in NY</h1>
              <h2>___ GET SERVED LIKE A KING</h2>
              <p>
                Looking for food delivery nearby? Not everybody knows or has the
                time to prepare tasty food.
              </p>
              <p>
                When you want to get served like a king then food delivery from
                restaurant Pronto will be your best choice.
              </p>
              <p>
                Simply select "Delivery" at the checkout screen and we hope
                you'll appreciate our food delivery service.
              </p>
            </div>
            <div className={styles.imgContainer}>
              <img src={BgImg} alt="Item" />
            </div>
          </div>
        </div>
      </section>
      <footer>
      <div  className={styles.footerContent}>
      <div className={styles.info}>
        <h1>Useful Links</h1>
        <p>Home</p>
        <p>Menu</p>
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
    </div>
  );
};

export default App;
