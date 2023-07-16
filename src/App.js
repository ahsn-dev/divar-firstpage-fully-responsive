import El from "./library/El";
import NavbarDesktop from "./components/NavbarDesktop";
import AsideDesktop from "./components/AsideDesktop";
import CardsDesktop from "./components/CardsDesktop";
import Navbar from "./components/Navbar";
import SecondNavbar from "./components/SecondNavbar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  const app = El({
    element: "div",
    style: "direction: rtl",
    child: [
      NavbarDesktop(),
      AsideDesktop(),
      CardsDesktop(),
      Navbar(),
      SecondNavbar(),
      Header(),
      Cards(),
      Footer(),
    ],
  });
  return app;
};

export default App;
