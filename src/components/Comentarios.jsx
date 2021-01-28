import React from 'react'
import Imagen from './Imagen'
import Texto from './Texto'

const Comentarios = ({ urlImagen, persona, texto}) => {

    return (
         <div className="media mt-3">
              <Imagen urlImagen = {urlImagen}/>
              <Texto persona = { persona} texto = { texto } />
        </div>
    )
}

export default Comentarios
