import styles from'./App.module.scss';
import HeaderLogo  from "./starter/logo.png";
import About1  from "./starter/about-1.jpg";
import About2  from "./starter/about-2.jpg";


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
       <section className={styles.sectionContent}>
          <div className={styles.secondPage}>
            <div className={styles.article}>
              <h1>We Are Pronto NY</h1>
              <h2>__ ABOUT US</h2>
              <p>At Restaurant Pronto we pride ourselves with the ability 
                to offer our customers delicious and authentic Italian food, created at the highest standards. Every single meal we make is unique.
                 We guarantee that you won’t get disappointed.</p>
                <p> The key to our success is simple: providing exquisite meals, made out of only the purest and freshest of ingredients that taste great every single time.</p>
 <p>Our goal is to help you enjoy the little things in life that matter. So eat delicious food. Grab a drink. But most of all, relax! We thank you from the bottom of our hearts for your continued support.</p>
 
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
              <p>Hope you are hungry. Buy one regular priced pizza 
                online and get a second pizza totally free!</p>
                <p>Online only!</p>
              
              <div className={styles.price}>Order code: 7867</div>
            </div>
            <div className={styles.thirdMenu}>
              <h1>Awesome Foursome</h1>
              <span>__SUNDAYS ONLY</span>
              <p>6 Delicious regular size pizzas to choose from: Margherita, Capricciosa,
                 Prosciutto e Funghi, Diavola, Calzone, Primavera.</p>
              
              <div className={styles.price}>Only $40</div>
            </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;
