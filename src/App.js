import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import UndefinedPage from "./pages/UndefinedPage";
import Layout from "./nestedRoutes/Layout";
import ElectricCars from "./nestedRoutes/ElectricCars";
import Motor from "./nestedRoutes/Motor";
import HakkimizdaSayfa from "./pages/HakkimizdaSayfa";

function App() {
  return (
    <BrowserRouter>
    <Header/>

    <Routes>

      <Route path="/" element={<MainPage/>} />
      <Route path="/ürünler" element={<ProductsPage/>} />
      <Route path="/ürün-detay/:productId" element={<ProductDetail/>} />
      <Route path="/hakkımızda" element={<HakkimizdaSayfa/>} />
      <Route path="/arabalar" element={<Layout/>}>
        <Route path="elektrik" element={<ElectricCars/>} />
        <Route path="içten-yanma" element={<Motor/>} />
      </Route>
      <Route path="*" element={<UndefinedPage/>} />

    </Routes>
    
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
