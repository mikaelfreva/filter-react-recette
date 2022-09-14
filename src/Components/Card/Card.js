import React from "react";
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ item }) => {
  return (
    <>
  
  <Link
to={{pathname: `/recette/${item.title.replace(/\s+/g, "-").trim().toLowerCase()}`}}
className="col-md-4 col-sm-6 card my-3 py-3 border-0 link-card"
key={item.id}
>

        <motion.div
              layout
              animate={{opacity:1}}
              initial={{opacity:0}}
             
             
              key={item.id}
              >
              
                <div className="card-img-top text-center">
                  <img 
                   src={process.env.PUBLIC_URL + `/images/${item.img}.jpg`} 
                        
                  alt={item.title} className="photo w-75" />
                </div>
                <div className="card-body">
              
                  <div className="card-title fw-bold fs-4">
                    {item.title}
                  </div>
                 
                  <div className="card-text">{item.desc}</div>
                  <div className="card-text">{item.etape}</div>

             
               
              </div>
              </motion.div> 



             
          
           
    
</Link>
        
    </>
  );
};

export default Card;
