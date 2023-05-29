import "./App.css";
import { Footer } from "./components/Footer";
import { MyNav } from "./components/MyNav";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Login } from "./pages/Login";
import { ProductDetail } from "./pages/ProductDetail";
import { useState } from "react";
// import {products} from "./modules/products"

function App() {
  let [appData,setAppData] = useState(null)
  let getData = function(data){
    setAppData(data)
  }
  return (
    <div className="App">
      <MyNav myFun= {getData}/>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products text={appData}/>} />
        <Route path="login" element={<Login />} />
        <Route path="products/:model" element={<ProductDetail />} />
        {/* <Route path="*" element={<Home/>} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
