import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import SelectSize from './Select';

function Form() {
  const [pais, setPais] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un objeto con los datos del formulario que envia el cliente
    const formData = {
      pais: pais,
      description: description,
      url: url,
    };

    // Enviar datos al servidor mediante una petición POST

    axios.post('http://localhost:3000/flags', formData)
      .then((response) => {
       
        console.log("Respuesta del servidor:", response.data);
      })
      .catch((error) => {
        console.error('Error al enviar datos al servidor:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form__input">
        <TextField
          sx={{ 
            color: "white",
            display:"flex", 
            m:"1rem"

        }}
          id="pais"
          label="Ingrese País"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          variant="outlined"
        />
        <TextField
          sx={{ 
            color: "white",
            display: "flex",
            m:"1rem"

        }}
          id="description"
          label="Ingrese descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          variant="outlined"
        />
        <TextField
          sx={{ 
            color: "white",
            display: "flex",
            m:"1rem"
        }}
          id="img"
          label="Ingrese URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          variant="outlined"
        />
        <SelectSize />
        <Button
        sx={{
            m: "1rem"
        }}
          size="large"
          type="submit"
          variant="contained"
        >
          Acceder
        </Button>
      </form>
    </div>
  );
}

export default Form;
