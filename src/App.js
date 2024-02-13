import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import CoinPage from "./pages/Coin";
import ComparePage from "./pages/ComparePage";
import Watchlist from "./pages/Watchlist";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <Route path="/watchlist" element={<Watchlist />}/>    
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    {/* <Footer /> */}
  </div>;
}

export default App;
