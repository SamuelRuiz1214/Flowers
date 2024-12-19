import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const response = await axios.get('http://localhost/Tienda_Flores/flowers.php');
        setFlowers(response.data);
      } catch (error) {
        console.error('Error encontrando flores', error);
      }
    };
    fetchFlowers();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <ul>
        {flowers.map((flower) => (
          <li key={flower.id}>
            {flower.name} - ${flower.price}
          </li>
        ))}
      </ul>
      <p>¿Quieres agregar una nueva flor? <Link to="/FlowerShop">Ir a la Tienda de Flores</Link></p>
    </div>
  );
}

export default Home;
