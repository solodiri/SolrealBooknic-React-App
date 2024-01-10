import "./cart.css";
import Card from "./Card";

const Cart = (book) => {
  const { code } = book;
  return (
    <>
      <section>
        <Card key={code} />
      </section>
    </>
  );
};

export default Cart;
