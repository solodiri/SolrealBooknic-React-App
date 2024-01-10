import "./NavBar.css";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import logo from "../images/SR 3D.png";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  // let quantity = 8;
  const { size } = props;

  const { cartItems, cartInCount } = useContext(ShopContext);
  // console.log(cartInCount);
  return (
    <>
      <div className="container ">
        <div className="nav">
          <div className="logocon">
            <img src={logo} className="logosr" alt={logo} />
            <h2 className="logo">
              <Link to="/">SODIREAL</Link>
            </h2>
          </div>
          <input className="searchBar" type="text" placeholder="Search" />
          <ul className="links">
            <li className="link">
              <Link to="/">HOME</Link>{" "}
            </li>
            <li className="link">
              <Link to="/About"> ABOUT</Link>
            </li>
            <li className="link">
              <Link to="/Products"> PRODUCTS</Link>
            </li>
            <li className="link">
              <Link to="/Contact">CONTACT</Link>{" "}
            </li>
            <li className="link signUp">
              <Link to="/LogIn">LOGIN</Link>{" "}
            </li>
            <li className="cartNcounter ">
              <div className="cart link">
                <Link to="/Cart">CART</Link>
                {/* <Link to="/Cart">🛒</Link> */}
              </div>

              {/* <div className="cartCounter">{size}</div> */}
              <div className="cartCounter">{cartInCount}</div>

              {/* <div className="cartCounter">
                {cartItems.length === 0 ? "" : cartItems.length}
              </div> */}
              {/* <div className="cartCounter">
                {cartItems.length === 0 ? "" : cartItems.length}
              </div> */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
// console.log(cartItems);
// console.log(size.lenght);
export default NavBar;
