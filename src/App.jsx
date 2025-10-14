import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";  
import About from "./pages/About";
import Logement from "./pages/Logement";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="logement/:id" element={<Logement />} />
        <Route path="*" element={<ErrorPage />} />


      </Route>
    </Routes>
  );
}

export default App;