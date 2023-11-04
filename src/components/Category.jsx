export default function Category(props) {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h1>{props.header}</h1>
      <p>{props.price}</p>
    </div>
  );
}
