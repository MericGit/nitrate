import React, {useEffect} from 'react'
import reactDom from 'react-dom';
import "./index.css"; 

const image = ""
const title = ""
const desc = ""
const date = ""

function App(){
  return (
    <section class = "events">
      <Event image="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4959784.jpg" title = "Forest Cleanup" date = "9/5/2021" desc = "Clean up the forest!"/>

      <Event image="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4959784.jpg" title = "Forest Cleanup" date = "9/5/2021" desc = "Clean up the forest!"/>
      <Event image="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4959784.jpg" title = "Forest Cleanup" date = "9/5/2021" desc = "Clean up the forest!"/>
      <Event image="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4959784.jpg" title = "Forest Cleanup" date = "9/5/2021" desc = "Clean up the forest!"/>
      <Event image="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4959784.jpg" title = "Forest Cleanup" date = "9/5/2021" desc = "Clean up the forest!"/>
    </section>
  )
}

const Event = (props) => {
  return (
    <article className ='event'>
      <img src={props.image} alt =''/>
      <h1>{props.title}</h1>
      <h3>{props.date}</h3>
      <h4>{props.desc}</h4>
    </article>
  );
};
reactDom.render(<App/>,document.getElementById('root'));


