import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buttons from './components/Buttons/Buttons';
import Bill from './Pages/BillSplitter/BillSplitter';
import BMI from './Pages/BMI/BMI'
import Calculator from './Pages/Calculator/Calculator'
import ExchangeRate from './Pages/ExchangeRate/ExchangeRate'

function App() {
  return (
    <div className="App">
      <Router>
        <Buttons />
        <Routes>
          <Route path="/bill-splitter" element={<Bill />} />
          <Route path="/bmi" element={<BMI />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/exchange-rate" element={<ExchangeRate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
