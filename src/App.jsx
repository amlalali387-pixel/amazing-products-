
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Products />} />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
