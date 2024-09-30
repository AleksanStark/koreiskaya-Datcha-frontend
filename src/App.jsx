import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import InformationPage from "./pages/InformationPage/InformationPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import css from "./App.module.css";
const App = () => {
  return (
    <div>
      <nav className={css.nav_panel}>
        <ul className={css.nav_panel_list}>
          <li className={css.nav_panel_item}>
            <NavLink to={"/contact-us"}>inquiry</NavLink>
          </li>
          <li className={css.nav_panel_item}>
            <NavLink to={"/info"}>marketing</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/info"} element={<InformationPage />} />
        <Route path={"/contact-us"} element={<ContactUsPage />} />
      </Routes>
    </div>
  );
};
export default App;
