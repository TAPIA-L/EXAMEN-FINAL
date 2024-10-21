import React, { useState } from 'react';
// Importamos el archivo de sonido desde la carpeta public
const tonoClic = new Audio('/sonido/Boton.mp3');

function Contador() {
    // Estado para almacenar el contador const
    const [count, setCount] = useState(0);
    // Función que incrementa el contador y reproduce el s
    function handleClick() {
        setCount(count + 1);
        tonoClic.play(); // Reproducir el sonido
    }
    return (

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 >Contador: {count}</h1>
            <button className="btn btn-warning" onClick={handleClick}>Incrementar</button>
        </div>
    );
}
export default Contador;