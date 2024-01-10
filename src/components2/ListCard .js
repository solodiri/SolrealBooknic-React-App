import "./BookList.css";

const ListCard = (data) => {
  const { addToCart } = data;
  // const { addToCart, data, image, title, subTitle, description } = props;
  // const clickHander = () => {
  // console.log(data);
  // };

  return (
    <section className="listCard">
      <img className="image" src={data.image} alt={data.title} />
      <div className="listData">
        <h3>{data.title}</h3>
        <h4>{data.subTitle}</h4>
        <h4>{data.description}</h4>
      </div>
      {/* <button onClick={clickHander}>At To Cart</button> */}
      <button onClick={() => addToCart(data)}>At To Cart</button>
    </section>
  );
};
export default ListCard;
