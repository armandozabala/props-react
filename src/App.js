import React, { Component } from 'react'
import Saludo from './components/Saludo';
import Comentarios from './components/Comentarios';


function App() {
  return (
    <div className="container mt-5">
       
        <h1>Proyecto desde 0</h1>

        <Saludo persona = 'Armando' edad={30} />

        <Saludo persona = 'Juan' edad={30}/>

        <Saludo persona = 'Carlos' edad={30}/>

        <hr/>

        <h3>Comentarios</h3>

        <Comentarios 
            urlImagen='https://picsum.photos/64'
            persona='Armando'
            texto = 'Lorem Picsum 999'
        />

       <Comentarios 
            urlImagen='https://picsum.photos/64'
            persona='Luis'
            texto = 'Lorem Picsum 666'
        />

    </div>
  );
}

export default App;
