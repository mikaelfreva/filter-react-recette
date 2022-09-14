import React from "react";
import Data from "../../Data";
import './Button.css'
const Button = ({ filterItem, setItem, menuItems,active,setActive }) => {
  console.log(active);

  const AllButton = (Data) => {
    setItem(Data);
    setActive('All');
  }
  const TypeButton = (Val) => {
    filterItem(Val)   
     setActive(Val);

  }
  return (
    <>
      <div className="d-flex justify-content-center">
      <button
          className={`${active == 'All' && 'active'} button-filter`}

          onClick={() => AllButton(Data)}
       
        >
          All
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button
             // className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              className={`${active == Val && 'active'} button-filter `}
              onClick={() => TypeButton(Val)}
       
              key={id}
            >
              {Val}
            </button>
          );
        })}
     
      </div>
    </>
  );
};

export default Button;
