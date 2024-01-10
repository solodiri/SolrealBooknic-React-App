import ProductCard from "./ProductCard";
import { Books } from "./Books";
import "./Main.css";

import banner from "../images/banner.jpg";

// const book ={
//   image :"https://edit.org/images/cat/book-covers-big-2019101610.jpg",
//   name : "Goody",
//   price : 20.2,
//   description :"the good things are here"

// }
// const book1 ={
//   image :"https://pub-static.fotor.com/assets/projects/pages/5be9d15a-0dc6-49e0-b41b-b787b56a9fac/dark-blue-sky-book-cover-302c2497f51741ccb4f94de481b0a34c.jpg",
//   name : "blue Ocean",
//   price : 40.2,
//   description :"Book Cover Maker: Design a Book Cover Online Free Fotor"

// }
// console.log(fisrtbook)

// year((Element)=>{
//   Element.innerHTML = currentYear
// })

const Main = () => {
  return (
    <>
      {/* Those Who are in Business are always Online . One of Them Now*/}
      <div className="boody">
        <div className="heading">
          <h1 className="mainHeading">Reading Good Books Builds You</h1>
          <h2 className="mainSubHeading">Be Rejuvenated!</h2>
        </div>
        <img src={banner} className="banner" alt="bannar" />
      </div>

      <div className="maincontainer ">
        {Books.map((book) => {
          // console.log(book);
          // const {image, name, description, price, children} = book
          return <ProductCard key={book.code} book={book} />;
        })}
        {/* (
     <div className="box"> 
     <div className="card"> 
     <img className="imgdetail"src={image}/>
     <h3 className="name">{name} </h3>
     <h3 className="description">{description} </h3>
     <p className="price">{price} </p>
     <button className="btn">Add To Cart</button>
     {children}
     </div>
   </div>
   ) */}
        {/* <ProductCard image={book.image} name={book.name}  description={book.description} price={book.price} gfgfh> <h4>Special Offer</h4></ProductCard>
    <ProductCard image={book1.image} name={book1.name}  description={book1.description} price={book1.price}/> */}
      </div>
    </>
  );
};
// image={book.image} name={book.name} price={book.price}

export default Main;
