
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';

import ChangeUrlPage from './pages/ChangeUrlPage/ChangeUrlpage';
function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/change-url" element={<ChangeUrlPage />} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App;
