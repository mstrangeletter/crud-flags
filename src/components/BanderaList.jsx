import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BanderaList() {
  const [banderas, setBanderas] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET a la ruta /flag del servidor
    axios.get('http://localhost:3000/flags')
      .then((response) => {
        // Actualizar el estado con los datos de las banderas recibidas del servidor
        setBanderas(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener las banderas:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Banderas</h1>
      <ul>
        {banderas.map((bandera) => (
          <li key={bandera._id}>
            <p>País: {bandera.pais}</p>
            <p>Descripción: {bandera.description}</p>
            {/* Aun no logro renderizar esto en el dom */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BanderaList;
