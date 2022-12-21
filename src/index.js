import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Jordan from './page/Jordan';
import Converse from './page/Converse';
import Find from './page/Find';
import Help from './page/Help';
import Join from './page/Join';
import Sign from './page/Sign';
import GTMC from './page/GTMC';
import Finders from './page/Finders';
import News from './page/News';
import Men from './page/Men';
import Kids from './page/Kids';
import Women from './page/Women';
import Sale from './page/Sale';
import Gifts from './components/Gifts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/jordan' element={<Jordan />} />
        <Route path='/converse' element={<Converse />} />
        <Route path='/find' element={<Find />} />
        <Route path='/help' element={<Help />} />
        <Route path='/joinus' element={<Join />} />
        <Route path='/signin' element={<Sign />} />
        <Route path='/gifts-3b0uf' element={<GTMC />} />
        <Route path='/gifting' element={<Finders />} />
        <Route path='/news' element={<News />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/sale' element={<Sale/>} />
        <Route path='/gifts' element={<Gifts />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

