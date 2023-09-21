import "./App.css";
// import Footer from "./components/Common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import CoinPage from "./pages/Coin";
import ComparePage from "./pages/ComparePage";

function App() {
  return <div className="App">
    {/* <Header />
    <MainComponent /> */} 
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/dashboard" element={<DashboardPage />}/>
          <Route path="/coin/:id" element={<CoinPage />}/>
          <Route path="/compare" element={<ComparePage />}/>     
      </Routes>
    </BrowserRouter>
    {/* <Footer /> */}
  </div>;
}

export default App;
