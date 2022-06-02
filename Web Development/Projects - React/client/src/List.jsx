const foodImageSrc = "https://picsum.photos/100";

export default function List() {
  return (
    <div>
      <img src={foodImageSrc} alt="pizza-img" className="foodImage"></img>
      <img src={foodImageSrc} alt="cookies-img" className="foodImage"></img>
      <img src={foodImageSrc} alt="bacon-img" className="foodImage"></img>
    </div>
  );
}
