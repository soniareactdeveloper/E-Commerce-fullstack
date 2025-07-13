import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./layouts/mainLayout";
import Shop from "./pages/Shop";
import Description from "./pages/Description";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="description" element={<Description />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
