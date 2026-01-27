function printHello() {
  console.log("Hello!!!");
}
function printBye() {
  console.log("Bye!!!");
}
function printByeMouse() {
  console.log("Bye Mouse!");
}
function printByeDoubleClk() {
  console.log("Bye Mouse!");
}
export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Button !!!</button>
      <p onClick={printBye}>Parah !!!</p>
      <p onMouseOver={printByeMouse}>
        {/* Not worked properly */}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eius
        veritatis esse mollitia tenetur vel distinctio harum debitis vitae, illo
        recusandae natus pariatur. Minus, facilis aliquam quos, soluta fuga sed
        modi possimus{" "}
      </p>
      <button onDoubleClick={printByeDoubleClk}>
        {/* Not worked properly */}
        Double click !!!
      </button>
    </div>
  );
}
