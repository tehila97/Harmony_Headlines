import React from "react";
import Article from "./components/Article/Article";
import { Routes } from 'react-router';
import { Route } from 'react-router';

export default function App () {

  return (
    <div>
      <Routes>
        <Route path='Article' element={<Article />}> </Route>
        <Route path='NewsCardList' element={<NewsCardList />}> </Route>
    </Routes>
    </div>
  );
}

