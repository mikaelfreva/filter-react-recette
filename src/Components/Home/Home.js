import React, { useState } from "react";
import Data from "../../Data";
import Card from "../Card/Card";
import Buttons from "../Button/Button";
import './Home.css'
import {motion} from 'framer-motion'
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [item, setItem] = useState(Data);
  const [active, setActive] = useState('All')

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };


return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navbar/>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
            active={active}
            setActive={setActive}
          />

<div className="container-fluid">
        
       
       <motion.div   
        layout
        animate={{opacity:1}}
        initial={{opacity:0}}
      
       className="row justify-content-center">
          {item.map((item) => {
            return  <Card key={item.id} item={item} />;
          })}
       </motion.div>

      </div>
        </div>
      </div>
    </>
  );
};

export default Home;
