import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Snake Plant", price: 15 },
  { id: 2, name: "Aloe Vera", price: 10 },
  { id: 3, name: "Peace Lily", price: 20 }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plant Collection</h2>
      {plants.map(plant => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => dispatch(addItem(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
