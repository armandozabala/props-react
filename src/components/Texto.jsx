import React from 'react'

const Texto = (props) => {
    return (
        <div className="media-body">
         <h5 className="mt-0">{props.persona}</h5>
         {props.texto}
        </div>
    )
}

export default Texto
