import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Styles/index.css';
import Main from './Pages/Main';
import GalleryPage from './Pages/GalleryPage';
import MemoriesPage from './Pages/MemoriesPage';
//import CardPage from './Pages/CardPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/gallerypage" element={GalleryPage} />
    <Route path="/memoriespage" element={MemoriesPage} />
    </Routes>
    </BrowserRouter>
    </React.StrictMode>
);


