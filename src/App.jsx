import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Categories, Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
