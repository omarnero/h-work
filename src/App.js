
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';

import ChangeUrlPage from './pages/ChangeUrlPage/ChangeUrlpage';
import ChangeImagePage from './pages/ChangeImagePage/ChangeImagePage';
function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/change-url" element={<ChangeUrlPage />} />
        <Route path="/change-image" element={<ChangeImagePage />} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App;
