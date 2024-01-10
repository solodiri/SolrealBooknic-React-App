import cover1 from "../images/200.png";

const CheckOut = () => {
  const fisrtbook = {
    // image :"https://edit.org/images/cat/book-covers-big-2019101610.jpg",
    image: cover1,
    name: "Gooday",
  };

  return (
    <>
      <main className="about">
        <h2>CHECK OUT PAGE</h2>
        <h3>Get The Full Benefit</h3>
        <h2>This Page is Under Constuction!</h2>
      </main>

      <section className="section">
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
            <div className="bottunCenter"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
