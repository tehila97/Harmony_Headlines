import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { data as cardList } from "../../data";
import Article from "../Article/Article";
import { NavLink, Outlet } from "react-router";

export default function NewsCardList () {
    function dorinFunction (id) {
    console.log(id);
    }


    return (
      <>
      <div>
        {cardList.map ((person, index) => {
           return( <NewsCard id={person.id} dorinFunction={dorinFunction} key={index} title= {person.title} author= {person.author} date= {person.date} source = {person.source} img = {person  .img}></NewsCard>
        );
        })}
          <NavLink to="/NewsCardList/Article"> Article </NavLink>   
        <Outlet> </Outlet>
      </div>
      </>
    );
  }
  



