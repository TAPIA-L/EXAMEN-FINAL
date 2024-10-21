import React, { useRef } from 'react';

function Camara() {
  // Referencia al elemento de video
  const videoRef = useRef(null);

  // Función para acceder a la cámara
  function handleAccessCamera() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // Establecer el stream de video al elemento de video
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error("Error al acceder a la cámara: ", err);
      });
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Acceder a la cámara</h1>
      <button className="btn btn-warning" onClick={handleAccessCamera}>Activar Cámara</button>
      <div>
        <video ref={videoRef} autoPlay style={{ width: '500px', height: '400px' }}></video>
      </div>
    </div>
  );
}

export default Camara;

