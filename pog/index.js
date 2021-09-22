import React from 'react'
import reactDom from 'react-dom';
import "./index.css"; 
import db from './databaseUtils.js';


function App(){
  return (
    <section class = "events">    
      <Event image="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4959784.jpg" title = "Forest Cleanup" date = "9/5/2021" desc = "Clean up the forest! and play among us too"/>
      <Event image="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4959784.jpg" title = "Forest Cleanup" date = "9/23/2021" desc = "Clean up the forest! and then vent through the forest"/>
      <Event image="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4959784.jpg" title = "Forest Cleanup" date = "9/4/2021" desc = "Clean up the forest! and find the imposters"/>
      <Event image="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4959784.jpg" title = "Forest Cleanup" date = "10/31/2021" desc = "Clean up the forest! and call emergency meetings"/>
      <Event image="https://discourse.disneyheroesgame.com/uploads/default/original/3X/c/2/c23f54aea2065f106e4dbb8218d0ce2d7853351c.png" title = "Forest Cleanup" date = "4/6/2021" desc = "Clean up the forest! sus! sus!"/>
    </section>
  )
}


const Event = (props) => {
  const {image, title, date, desc} = props
  return (
    <article className ='event'>
      <img src={image} alt =''/>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <h4>{desc}</h4>
    </article>
  );
};

reactDom.render(<App/>,document.getElementById('root'));

