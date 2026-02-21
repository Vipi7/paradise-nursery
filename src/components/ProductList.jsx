import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantsArray = [
  {
    category: "Indoor Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 15, image: "snake.jpg" },
      { id: 2, name: "Aloe Vera", price: 10, image: "aloe.jpg" },
    ],
  },
  {
    category: "Outdoor Plants",
    plants: [
      { id: 3, name: "Rose Plant", price: 20, image: "rose.jpg" },
      { id: 4, name: "Tulsi", price: 12, image: "tulsi.jpg" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Our Plants</h2>

      {plantsArray.map((group) => (
        <div key={group.category}>
          <h3>{group.category}</h3>

          {group.plants.map((plant) => (
            <div key={plant.id}>
              <img
                src={plant.image}
                alt={plant.name}
                width="100"
              />
              <h4>{plant.name}</h4>
              <p>${plant.price}</p>

              <button onClick={() => dispatch(addItem(plant))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
