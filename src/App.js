import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import FinancialStatements from "./pages/FinancialStatements";
function App() {
  return (
    <div className="App">
      <h1>Financial Values Catalogue</h1>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/statements">Statements</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="statements" element={<FinancialStatements />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
