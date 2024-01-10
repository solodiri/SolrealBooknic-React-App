import { useEffect, useState } from "react";
import "./Testing.css";
// import logo from "./images/SR 3D.png"

const Testing = () => {
  const [clicked, setClicked] = useState("My Home Page");
  const [value, setValue] = useState(0);

  const clickedme = () => {
    if (clicked === "My Home Page") {
      setClicked("I Was Changed");
    } else {
      setClicked("My Home Page");
    }
  };

  // useEffect(())

  const myValue = () => {
    setValue(value + 1);
  };
  useEffect(() => {
    if (value >= 1) {
      document.title = `New Title (${value})`;
    }
    // console.log('I have An Effect')
  }, []);

  const [size, setVSize] = useState(window.innerWidth);
  // console.log(size)
  // console.log('My size Was Increaced')

  const checkSize = () => {
    setVSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    // return (()=>{
    //   // window.removeEventListener('resize', checkSize)
    //   console.log( 'Hello World')
    // })
  }, []);
  // console.log( 'Hello')

  const [testing, setTesting] = useState("Good");

  const testingthings = () => {
    if (testing === "Good") {
      // console.log('Correct')
      setTesting("Better");
    } else {
      // console.log('I was Clicked')
      setTesting("Good");
    }
  };
  const [test, setTest] = useState("Add To Cart");

  const [value2, setValue2] = useState(0);

  const sume = () => {
    setValue2(value2 + 1);
    console.log("I was Clicked");
  };

  // useEffect(()=>{
  //   if(value2 >= 5){
  //     document.span = `New Count (${value2})`;
  //   }
  //   console.log('I have An Effect 23')

  // },[])

  const addMe = () => {
    if (test === "Add To Cart") {
      setTest("Added");
    } else {
      setTest("Add To Cart");
    }
    console.log("I was Clicked");
  };

  return (
    <>
      <div className="boundery">
        <h2>{clicked}</h2>
        <h2>WINDOW</h2>
        <h2>{size} px</h2>
        <button className="button" onClick={clickedme}>
          Close me
        </button>
        <h2>{value}</h2>
        <button className="button" onClick={myValue}>
          Increase Value
        </button>
        {/* <input className="inpu" placeholder='Test' /> */}
        <div className="mydiv">{testing}</div>
        <div className="mydiv">{test}</div>
        <button className="button" onClick={testingthings}>
          Test
        </button>
        <button className="button" onClick={addMe}>
          Addition
        </button>
        <br /> <br />
        <br />
        <span className="">{value2}</span>
        <br />
        <button className="button" onClick={sume}>
          Sum
        </button>
      </div>
    </>
  );
};
{
  /* <input type='text' placeholder='Name'/> */
}
{
  /* <button type='submit' className="button">Submit</button> */
}
export default Testing;
