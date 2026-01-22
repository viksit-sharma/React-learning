import "./Product.css";
function Product({ position, title, descrption, features }) {
  //   const list = features.map((features) => <li>{features}</li>);
  let styles = { backgroundColor: position % 2 != 0 ? "skyBlue" : "gray" };
  return (
    <div className="Product" style={styles}>
      <h1>
        {position} {title}
      </h1>
      <h2>
        {position} {descrption}
      </h2>
      {/* {position % 2 != 0 ? "Odd Position" : "Even Position"}
      {position % 2 != 0 ? "Odd Position" : null}
      {position % 2 == 0 ? "Even Position" : null} */}
      {position % 2 != 0 && "Odd Position"}
      {position % 2 == 0 && "Even Position"}

      {/* <pre>{list}</pre> */}
    </div>
  );
}
export default Product;
