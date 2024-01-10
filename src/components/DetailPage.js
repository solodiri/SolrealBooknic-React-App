// import { Books } from "./Books";
import { useParams } from "react-router-dom";
// import { useState, useEfect } from "react";
const DetailPage = () => {
  const { code } = useParams();

  // const bookid = code;

  console.log(code);
  // const newBook = Books.find((book) => {
  //   book.code == bookid;
  // });

  // const { code } = useParams();
  // const [book, setBook] = useState("dafault book");
  // console.log(code);

  // useEfect(() => {
  //   const newBook = Books.find((book) => {
  //     {
  //       book.code === parseInt(code);
  //       setBook(newBook.code);
  //     }
  //   }, []);

  //   console.log(newBook);
  // });
  return (
    <>
      <h2> Detail Page</h2>

      {/* <section className="section">
        <h1 className="myProduct">Poducts Page</h1>
        <div className="box">
          <div className="card">
            <img className="imgdetail" src={book.image} alt={book.name} />
            <h3 className="title">{book.name}</h3>
            <h3 className="subTitle">{book.subTitle} </h3>
            <h3 className="description">{book.description} </h3>
            <p className="price">$ {book.price} </p>
            <div className="bottunCenter"></div>
          </div>
        </div>
      </section> */}
    </>
  );
};
// return <div>DetailPage</div>;
export default DetailPage;
