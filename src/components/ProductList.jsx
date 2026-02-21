import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { useState } from "react";

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
      { id: 4, name: "Tulsi Plant", price: 12, image: "tulsi.jpg" },
    ],
  },
  {
    category: "Medicinal Plants",
    plants: [
      { id: 5, name: "Mint Plant", price: 8, image: "mint.jpg" },
      { id: 6, name: "Neem Plant", price: 18, image: "neem.jpg" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      {/* Navbar */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>e-plantShopping</h2>
        <h3>Cart Items: {cartItems.length}</h3>
      </div>

      {/* Products */}
      {plantsArray.map((group) => (
        <div key={group.category}>
          <h3>{group.category}</h3>

          {group.plants.map((plant) => (
            <div key={plant.id}>
              <img src={plant.image} alt={plant.name} width="100" />
              <h4>{plant.name}</h4>
              <p>${plant.price}</p>

              <button
                onClick={() => handleAddToCart(plant)}
                disabled={addedItems.includes(plant.id)}
              >
                {addedItems.includes(plant.id)
                  ? "Added"
                  : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
