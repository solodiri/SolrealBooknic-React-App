// import "./cart.css";
// import Card from "./Card";
// import ListCard from "./ListCard ";
// import BookData from "./Data";

const CartIn = (props) => {
  const { cartItems } = props;
  // console.log(cartItems);

  return (
    <>
      <h1>My Cart House</h1>
      {cartItems.length === 0 && <h2>Your Cart Is Enpty</h2>}

      {cartItems.map((item) => {
        return (
          <>
            <div key={item.id}>
              <img className="cartInImang" src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <h4>{item.description}</h4>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CartIn;
