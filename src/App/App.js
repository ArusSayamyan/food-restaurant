import { Switch, Route, Redirect } from "react-router-dom";
import styles from "./App.module.scss";

//COMPONENTS
import Header from "../layout/header/Header.layout";
import Footer from "../layout/footer/Footer.layout";
import HomePage from "src/pages/home/Home.page";
import MenuPage from "src/pages/menu/Menu.page";


const App = () => {

  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.App_content}>
        <div className={styles.pages}>
          <Switch>
            <Route component={HomePage} path="/home" />
            <Route component={MenuPage} path="/menu" />
            <Redirect exact from="/" to="/home" />
          </Switch>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default App;