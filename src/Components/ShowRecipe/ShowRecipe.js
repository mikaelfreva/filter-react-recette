import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, useParams } from 'react-router-dom';
import inventory from "../../Data";
import './ShowRecipe.css'
export default function ShowRecipe() {

  const { id } = useParams();

  console.log(id);

  const productClicked = inventory.findIndex(
   
    (obj) => obj.title.replace(/\s+/g, "-").trim().toLowerCase() === id,
  );

  const item = inventory[productClicked];
  return (
    <>
    <Navbar/>

    <Link to="/">
    
    Retour
   
    </Link>
    <div className="container-recipe">
      <h2>{item.title}</h2>
    <div className="showrecipe ">

   <p>
       <img
          className="img-showcase"
          src={
            process.env.PUBLIC_URL +
            `/images/${item.img}.jpg`
          }
          alt=""
        />
   </p>
   

      <div className="description">
      <p> <b>Catégorie :</b>  {item.category} </p>

      <p> <b> Préparation :</b>  {item.preparation} </p>
      <p> <b>Cuisson :</b>  {item.cuisson} </p>
        </div>
     
    </div> 
    </div>


    
    </>
  )
}
