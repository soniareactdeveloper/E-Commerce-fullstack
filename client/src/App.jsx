import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./layouts/mainLayout";
import Shop from "./pages/Shop";
import Description from "./pages/Description";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="description" element={<Description />} />
          <Route path="cart" element={<Cart/>}/>
          <Route path="checkout" element={<CheckOut/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="about" element={<About/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
