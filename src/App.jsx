import "./Style/App.css";
import { Header } from "./Home/Header";
import { Section } from "./Home/Section";
import { StoreHeader } from "./Store/StoreHeader";
import { StoreSection } from "./Store/StoreSection";
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
          path="/about"
          element={
            <>
              <StoreHeader />
              <StoreSection />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
