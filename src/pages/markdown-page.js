import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MarkdownPage = () => {
  const [temas, setTemas] = useState([]);

  useEffect(() => {
    axios.get('/api/temas')
      .then(response => {
        setTemas(response.data);
      })
      .catch(error => {
        console.error('Error fetching temas:', error);
      });
  }, []);

  return (
    <div>
      <h1>Bases de Datos</h1>
      {temas.map((tema, index) => (
        <div key={index}>
          <h2>{tema.titulo}</h2>
          <p>{tema.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default MarkdownPage;