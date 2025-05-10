import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login.jsx';
import TransactionsPage from './pages/Transactions.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/transactions' element={<TransactionsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
