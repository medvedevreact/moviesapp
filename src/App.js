import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="simple-wrapper">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
