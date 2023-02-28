import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './views/Home';
import Banner from './components/Banner';
import Basket from './views/Basket';
import Profile from './views/Profile';

function App() {
  const { mode } = useSelector((state) => state.interface);

  return (
    <BrowserRouter>
      <div className={`${mode === 'dark' ? 'dark-mode' : ''}`}>
        <Banner />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
