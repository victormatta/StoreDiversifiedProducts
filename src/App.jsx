import "./Style/App.css";
import { Header } from "./Home/Header";
import { Section } from "./Home/Section";
import { StoreHeader } from "./Store/StoreHeader";
import { StoreSection } from "./Store/StoreSection";
import { FoodsHeader } from "./assets/Foods/FoodsHeader";
import { FoodsSection } from "./assets/Foods/FoodsSection";
import { MakeUpHeader } from "./assets/MakeUp/MakeUpHeader";
import { MakeUpSection } from "./assets/MakeUp/MakeUpSection";
import { DecorationHeader } from "./assets/HouseDecoration/DecorationHeader";
import { DecorationSection } from "./assets/HouseDecoration/DecorationSection";
import { CarAcessHeader } from "./assets/CarAcessories/CarAcessHeader";
import { CarAcessSection } from "./assets/CarAcessories/CarAcessSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function App() {
  //https://api.mercadolibre.com/sites/MLB/search?q=alimentos
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Section />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <StoreHeader />
              <StoreSection />
            </>
          }
        />
        <Route
          path="/foods"
          element={
            <>
              <FoodsHeader />
              <FoodsSection />
            </>
          }
        />
        <Route
          path="/makeup"
          element={
            <>
              <MakeUpHeader />
              <MakeUpSection />
            </>
          }
        />
        <Route
          path="/housedecoration"
          element={
            <>
              <DecorationHeader />
              <DecorationSection />
            </>
          }
        />
        <Route
          path="/caracessories"
          element={
            <>
              <CarAcessHeader />
              <CarAcessSection />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
