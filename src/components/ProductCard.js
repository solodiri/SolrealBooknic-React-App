// import Buttons from "./Buttons";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import "./Buttons.css";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
// import Books from "./components/Books";

// const fisrtbook ={
//     image :"https://edit.org/images/cat/book-covers-big-2019101610.jpg",
//     name : "Goody",
//     price : 20.2,
//     description :"the good things are here"

// }
// console.log(book)

// const image = "https://edit.org/images/cat/book-covers-big-2019101610.jpg"
// const name = "Goody"
// const price = 20.26;
// const description ="the good things are here"

// const addToCartHandler= ()=>{
//   console.log('name')
// }

const ProductCard = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  // const [value2, setValue2] = useState(0);

  // const summe = () => {
  //   let count = setValue2(value2 + 1);
  //   console.log("I was Clicked 3");
  //   console.log(value2 + 1);
  //   console.log(count);
  //   return count;
  // };

  // const ProductCard = ({image, name, description, price})
  const { image, title, subTitle, description, price, code } = props.book;
  const cartItemAmount = cartItems[code];
  // console.log(code);
  return (
    <>
      <div className="box">
        <div className="card">
          <Link to={`detailPage/${code}`}>
            <img className="imgdetail" src={image} alt={title} />
            <h3 className="title" onClick={() => {}}>
              {title}
            </h3>
            <h3 className="subTitle">{subTitle} </h3>
            <h3 className="description">{description} </h3>
            <p className="price">$ {price} </p>
            {/* <button className="btn" onClick={addToCartHandler}>Add To Cart</button> */}
          </Link>
          <button
            className="btn button"
            onClick={() => {
              addToCart(code);
            }}
          >
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>

          {/* {children} */}
          <div className="bottunCenter">{/* <Buttons /> */}</div>

          <div className="bottunCenter">
            {/* <span className="">{value2}</span> */}
            <br /> <br />
            {/* <button className="button" onClick={summe}>
              Click To Add
            </button> */}
            {/* <button
              className="button"
              onClick={() => {
                summe(code);
              }}
            >
              Click To Add
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
