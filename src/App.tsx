import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Categories, Home, NotFound, Quiz, Result } from "./pages";

function App() : JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
