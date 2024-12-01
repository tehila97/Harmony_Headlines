import React from "react";
import NewsCardList from './components/NewsCardList/NewsCardList';
import Article from "./components/Article/Article";

export default function App () {

  return (
    <div>
      <NewsCardList />
      <Article title={"test"} description={"thtufjks"} />
    </div>
  );
}


// 