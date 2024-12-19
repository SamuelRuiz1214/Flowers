import React, { useState } from 'react';
import axios from 'axios';

function FlowerShop() {
  const [flower, setFlower] = useState({ name: '', price: '' });

  const handleChange = (e) => {
    setFlower({ ...flower, [e.target.name]: e.target.value });
  };

  const handleAddFlower = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost/Tienda_Flores/add_flowers.php', flower);
      setFlower({ name: '', price: '' });
    } catch (error) {
      console.error('Error adding flower', error);
    }
  };

  return (
    <div className="flower-shop-container">
      <h2 className="title">Tienda de Flores</h2>
      <form onSubmit={handleAddFlower} className="flower-form">
        <div className="form-group">
          <label>Nombre de la Flor:</label>
          <input type="text" name="name" value={flower.name} onChange={handleChange} placeholder="Nombre de la Flor" />
        </div>
        <div className="form-group">
          <label>Precio:</label>
          <input type="number" name="price" value={flower.price} onChange={handleChange} placeholder="Precio" />
        </div>
        <button type="submit" className="btn-add">Agregar Flor</button>
      </form>
    </div>
  );
}

export default FlowerShop;
