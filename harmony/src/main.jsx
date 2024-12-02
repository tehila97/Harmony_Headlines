import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import './index.css'
import App from './App.jsx'
import NewsCardList from './components/NewsCardList/NewsCardList.jsx'; 
import Article from './components/Article/Article.jsx'; 

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<StrictMode>
  <Routes>
    <Route path="/" element={<Navigate to="/NewsCardList" />} />
    <Route path="/NewsCardList" element={<NewsCardList />}>  
      <Route path="/NewsCardList/Article" element={<Article />} />
    </Route> 
  </Routes>  
</StrictMode>
  </BrowserRouter>
)
