import { Books } from "./Books";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Card = (book) => {
  // const { addCart } = book;
  const { code } = book;
  const {
    cartItems,
    // cartInCount,
    removeFromCart,
    addToCart,
    upDateCartItemCount,
    getTotalCartAmount,
    removeAllFromCart,
  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  console.log(totalAmount);

  return (
    <div>
      <section className="cartSection ">
        <h1 className="myCart">Your Cart Items</h1>
        {Books.map((book, code) => {
          if (cartItems[book.code] !== 0) {
            return (
              <>
                <div className="cartBox" key={code}>
                  <div className="cartCard">
                    <div className="cartBlock">
                      <div
                        className="title"
                        style={{
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: "600",
                          marginBottom: "10px",
                        }}
                      >
                        IMAGE
                      </div>
                      <img
                        className="cartImg"
                        src={book.image}
                        alt={book.title}
                      />
                    </div>
                    <div className="cartBlock">
                      <div
                        className="title"
                        style={{
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: "600",
                          marginBottom: "10px",
                        }}
                      >
                        TITLE
                      </div>
                      <h3 className="cartTitle">{book.title}</h3>
                    </div>
                    <div className="cartBlock">
                      <div
                        className="title"
                        style={{
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: "600",
                          marginBottom: "10px",
                        }}
                      >
                        SUBTITLE
                      </div>
                      <h3 className="cartSubTitle"> {book.subTitle} </h3>
                    </div>
                    <div className="cartBlock">
                      <div
                        className="title"
                        style={{
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: "600",
                          marginBottom: "10px",
                        }}
                      >
                        DESCRIPTION
                      </div>
                      <h3 className="cartDescription"> {book.description} </h3>
                    </div>
                    <div className="cartBlock">
                      <div
                        className="title"
                        style={{
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: "600",
                          marginBottom: "10px",
                        }}
                      >
                        PRICE
                      </div>
                      <p className="cartPrice"> $ {book.price} </p>
                    </div>
                    <div className="cartBlock">
                      <div
                        className="title"
                        style={{
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: "600",
                          marginBottom: "10px",
                        }}
                      >
                        QUANTITY
                      </div>
                      <button
                        className="increasebtn cartbtn "
                        onClick={() => {
                          addToCart([book.code]);
                        }}
                      >
                        +
                      </button>
                      <input
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                        className="inputCount"
                        value={cartItems[book.code]}
                        // type="number"
                        // min="1"
                        onChange={(e) => {
                          upDateCartItemCount(Number(e.target.value), [
                            book.code,
                          ]);
                        }}
                      />

                      <button
                        className="decreasebtn cartbtn "
                        onClick={() => {
                          removeFromCart([book.code]);
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
        <div className="subTotal">
          SubTotal: <span>$ {totalAmount}</span>
        </div>
        <button
          className=" continueShopping cartbtn"
          onClick={() => {
            removeFromCart([book.code]);
          }}
        >
          <Link className="link" to="/">
            Continue Shopping
          </Link>
        </button>
        <button className=" deletsAllbtn cartbtn" onClick={removeAllFromCart}>
          Delete All
        </button>
        {totalAmount > 0 ? (
          <button className="checkOutbtn cartbtn">
            <Link className="link" to="/CheckOut">
              Check Out
            </Link>
          </button>
        ) : (
          <h1>Your Cart is Empty</h1>
        )}
        <h1>{cartItems[code]}</h1>
      </section>
    </div>
  );
};
export default Card;
