import "./Style/App.css";
import { Header } from "./Home/Header";
import { Section } from "./Home/Section";
import { StoreHeader } from "./Store/StoreHeader";
import { StoreSection } from "./Store/StoreSection";
import { FoodsHeader } from "./Foods/FoodsHeader";
import { FoodsSection } from "./Foods/FoodsSection";
import { MakeUpHeader } from "./MakeUp/MakeUpHeader";
import { MakeUpSection } from "./MakeUp/MakeUpSection";
import { DecorationHeader } from "./HouseDecoration/DecorationHeader";
import { DecorationSection } from "./HouseDecoration/DecorationSection";
import { CarAcessHeader } from "./CarAcessories/CarAcessHeader";
import { CarAcessSection } from "./CarAcessories/CarAcessSection";
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
          path="/supermarket"
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
