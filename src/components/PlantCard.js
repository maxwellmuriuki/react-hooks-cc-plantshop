import React, { useState } from "react";

function PlantCard({ id, image, name, price }) {
  // State for tracking availability status of the plant
  const [availability, setAvailability] = useState(true);

  // Toggle availability status when button is clicked
  function handleClick() {
    setAvailability(!availability);
  }
  
  return (
    <li className="card" data-testid="plant-item">
      {/* Plant image */}
      <img src={image} alt={name} />
      {/* Plant name */}
      <h4>{name}</h4>
      {/* Plant price */}
      <p>Price: ${price}</p>
      {/* Conditional rendering for availability button */}
      {availability ? 
        (
          <button onClick={handleClick} className="primary">
            In Stock
          </button>
        ) : 
        (
          <button onClick={handleClick}>
            Out of Stock
          </button>
        )
      }
    </li>
  );
}

export default PlantCard;
