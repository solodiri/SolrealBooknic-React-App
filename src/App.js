import "./App.css";
import { ShopContextProvider } from "./Context/ShopContext";
import { useContext } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer1";
import Main from "./components/Main";
// import {useEffect, useRef} from 'react';
import Cart from "./components/Cart";
// import BookList from "./components2/BookList";
// import CartIn from "./components2/CartIn";
import About from "./components/About";
import CheckOut from "./components/CheckOut";
import Products from "./components/Products";
// import books from "./components/Books";
import Contact from "./components/Contact";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import DetailPage from "./components/DetailPage";
import Conditions from "./components/Conditions";
import Dashboard from "./components/Dashboard";
import Privacy from "./components/Privacy";
import Disclaimer from "./components/Disclaimer";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ButtonsShare from "./components/ButtonsShare";
import { useState } from "react";
// import { ShopContext } from "../Context/ShopContext";

function App() {
  // const { cartItemCount } = useContext();
  // const refContainer =useRef(null);
  // const liContainer =useRef(null);

  // const submitFormHandler = (e)=>{
  //   e.preventDefault()
  //   console.log(refContainer.current.value)
  // //  let result = refContainer.current.value
  // //  console.log(result)
  // }

  // useEffect(()=>{
  //   // console.log(refContainer.current);
  //   refContainer.current.focus();
  //   // refContainer.current= submitFormHandler;
  //   // let result = ()=>{
  //   //  liContainer.current;
  //   //   return

  //   // console.log(liContainer.current);
  //   // }
  //   // document.title = `${result}`;
  // },[])

  // let result = liContainer.current;
  // result='gfhjfsjhsff'

  // const addCart = (code) => {
  //   setCart(cart + 1);
  // };

  // const { cartItems } = useContext();

  // const handleClick = () => {
  //   console.log("I Was Clicked from App1");
  // };
  // const handleClick2 = () => {
  //   console.log("I Was Clicked from App2");
  // };

  const [cartItems, setCartItems] = useState([]);

  // console.log(setCartItems);

  // const addToCart = (item) => {
  //   console.log("Item Added To Cart");
  //   let isPresent = false;
  //   cartItems?.forEach((data) => {
  //     if (item.id === data.id) isPresent = true;
  //   });
  //   if (isPresent) return;
  //   setCartItems([...cartItems, item]);
  // };

  // setCartItems({ ...cartItems, data });
  // let isPresent = cartItems.find((item) => item.id === data.id);
  // if (isPresent) {
  //   setCartItems(
  //     cartItems &&
  //       cartItems.map((item) =>
  //         item.id === data.id
  //           ? { ...cartItems, quantity: isPresent.quantity + 1 }
  //           : item
  //       )
  //   );
  // } else {
  //   setCartItems([...cartItems, { ...data, quantity: 1 }]);
  // }

  return (
    <ShopContextProvider>
      <Router>
        {/* <NavBar size={3} /> */}
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/CheckOut" element={<CheckOut />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/detailPage/:code" element={<DetailPage />} />
          <Route exact path="/LogIn" element={<LogIn />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/Conditions" element={<Conditions />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/Privacy" element={<Privacy />} />
          <Route exact path="/Disclaimer" element={<Disclaimer />} />
          {/* <Route exact path="*" element={<Error />} /> */}
        </Routes>
        {/* <ButtonsShare data={rete} clickAction={handleClick}>
          HOME
        </ButtonsShare>
        <ButtonsShare data={reting} clickAction={handleClick2}>
          CALL
        </ButtonsShare> */}

        {/* <BookList addToCart={addToCart} /> */}
        {/* <CartIn cartItems={cartItems} addToCart={addToCart} /> */}
        {/* <button>Go To Cart ({cartItems.length})</button> */}
        <Footer />
      </Router>
    </ShopContextProvider>
  );
}

// const rete = "Good";
// const reting = "Cool";

export default App;
