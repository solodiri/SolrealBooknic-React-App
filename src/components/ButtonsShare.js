import "./ButtonsShare.css";

const ButtonsShare = (props) => {
  const { children, clickAction, data } = props;
  // console.log(children);

  // const handleClick = () => {
  //   console.log("I Was Clicked");
  // };
  return (
    <>
      <button className="button" onClick={clickAction}>
        {children} + {data}
      </button>
    </>
  );
};
export default ButtonsShare;
