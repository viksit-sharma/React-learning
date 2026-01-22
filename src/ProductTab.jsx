import Product from "./Product.jsx";
function ProductTab() {
  let options = ["Hi-tech", "Durable", "Long lasting"];
  return (
    <>
      <Product
        position={1}
        title="title"
        descrption=" description"
        // features={options}
      />
      <Product
        position={2}
        title="title"
        descrption=" description"
        // features={options}
      />
      <Product
        position={3}
        title="title"
        descrption=" description"
        // features={options}
      />
    </>
  );
}
export default ProductTab;
