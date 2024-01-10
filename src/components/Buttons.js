import "./Buttons.css";
import Inputhouse from './Inputhouse';
import { useState } from "react";


const Buttons = (props)=>{

  const [test, setTest] = useState("Add To Cart");
  const [counter1, setCounter] = useState("0");

  const addMe=()=>{
    if(test === "Add To Cart"){
      setTest("Added")
      adding()
      console.log('I aas clicked')
    } else{
      setTest("Add To Cart")
   }
  }
  const adding=()=>{
    setCounter(Number(counter1 + 1))
    // console.log(setCounter(Number(counter1 + 1)))
    
  }
  


  let btn = 'Add To Cart'
  // let counter = 0
  

  return <>
   <Inputhouse />
   {/* <counter1/> */}
    <div className="">{counter1}</div>
    <button className="button"onClick={addMe}>{test}</button>
  </>
}
export default Buttons;