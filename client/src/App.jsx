import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./layouts/mainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
