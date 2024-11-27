import React from "react";

export default function NewsCard (props) {
    return (
       <div>    
         <ul> 
            <li id="first card" className="card">
           <button>   
             <p>img: <img src={props.img} /></p>
             <p>title:{props.title}</p>
             <p>data:{props.date} </p>
             <p>author:{props.author} </p>
             <p>source:{props.source}</p>
          </button>
            </li>
        </ul>
      </div>       
    );
  };