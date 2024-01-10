import "./BookList.css";
import BookData from "./Data";
import ListCard from "./ListCard ";

const BookList = (props) => {
  const { addToCart, cartItems } = props;
  // console.log(BookData.length);
  // console.log(Data);
  // console.log(cartItems);
  return (
    <>
      <h3 className="booklistHeader">Features</h3>
      <div className="booklist">
        {BookData.map((data) => {
          return (
            <ListCard
              key={data.id}
              {...data}
              addToCart={addToCart}
              cartItems={cartItems}
            />
          );
        })}
      </div>
    </>
  );
};
export default BookList;
