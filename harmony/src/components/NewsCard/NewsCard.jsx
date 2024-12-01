import React from "react";


export default function NewsCard (props) {
    return (
       <div  onClick = {()=> {props.dorinFunction(props.id)}}id="first_card" className="card">    
             <p>img: <img src={props.img} /></p>
             <p>title:{props.title}</p>
             <p>data:{props.date} </p>
             <p>author:{props.author} </p>
             <p>source:{props.source}</p>
      </div>       
    );
  };