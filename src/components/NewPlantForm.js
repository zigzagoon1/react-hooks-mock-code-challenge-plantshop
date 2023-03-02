import React from "react";

function NewPlantForm( {handleAddPlant, plants} ) {

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      "id": plants.length + 1,
      "name": e.target.name.value,
      "image": e.target.image.value,
      "price": e.target.price.value
    }
    handleAddPlant(newPlant);
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
