import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Categories, Home, Quiz } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
