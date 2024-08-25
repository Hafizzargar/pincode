import React, { useState } from "react";
import { Link } from "react-router-dom";

function High(props) {
    const {val,setval}=props;
    const [dis,setdis]=useState(false);
    
    function abc(e){
        if(e.target.value.length>0 || e.target.value.length<=5 || e.target.value.length>6){
            setdis(true);

        }
        setval(e.target.value);
      
      }
  return (
    <div>
      <label>Enter Pincode</label>
      <input
      type="text"
        className="main_input"
        placeholder="Pincode"
        value={val}
        onChange={abc}
      />
       <Link to="/data">
        <button>Lookup</button>
      </Link>
    
     
      
    </div>
  );
}

export default High;
