import cover1 from "../images/1.png";

const Products = () => {
  const fisrtbook = {
    // image :"https://edit.org/images/cat/book-covers-big-2019101610.jpg",
    image: cover1,
    name: "Goody",
    price: 20.2,
    description: "the good things are here",
  };

  return (
    <section className="section">
      <h1 className="myProduct">Poducts Page</h1>
      <div className="box">
        <div className="card">
          <img
            className="imgdetail"
            src={fisrtbook.image}
            alt={fisrtbook.name}
          />
          <h3 className="title">{fisrtbook.name}</h3>
          <h3 className="subTitle">{fisrtbook.subTitle} </h3>
          <h3 className="description">{fisrtbook.description} </h3>
          <p className="price">$ {fisrtbook.price} </p>
          <div className="bottunCenter"></div>
        </div>
      </div>
    </section>
  );
};

export default Products;
