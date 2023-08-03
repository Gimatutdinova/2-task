import React from 'react';
import Header from './Components/header.js';
import Footer from './Components/footer.js';
import Main from './Pages/main.js';

import { Navigate, Routes, Route } from 'react-router-dom'

export default function App() {
    return (
        <div className='wrapper'>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </div>
    );
}