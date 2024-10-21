import React, { useState } from 'react';


const Calculatora = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [count, setCount] = useState(0);

  const handleInputChange = (e, field) => {
    if (field === 'num1') {
      setNum1(e.target.value);
    } else {
      setNum2(e.target.value);
    }
  };

 

  const handleSum = () => {
    setCount(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtract = () => {
    setCount(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiply = () => {
    setCount(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivide = () => {
    if (parseFloat(num2) !== 0) {
        setCount((parseFloat(num1) / parseFloat(num2)).toFixed(2));
    } else {
        setCount(0);
        alert('No se puede dividir por cero');
    }
};
  const handleReset = () => {
    setNum1('');
    setNum2('');
    setCount(0);
  };

  return (
    <div className="calculator container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header"><center><h1>Calculadora</h1></center></div>
            <div className="card-body">
              <div className="display mb-3 text-center fs-2">{count}</div>
              <div className="input-fields mb-3">
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Número 1"
                    value={num1}
                    onChange={(e) => handleInputChange(e, 'num1')}
                  />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Número 2"
                    value={num2}
                    onChange={(e) => handleInputChange(e, 'num2')}
                  />
                </div>
              </div>
              <div className="buttons d-grid gap-2 mb-3">
               
                <button className="btn btn-success" onClick={handleSum}>
                  Sumar
                </button>
                <button className="btn btn-danger" onClick={handleSubtract}>
                  Restar
                </button>
                <button className="btn btn-warning" onClick={handleMultiply}>
                  Multiplicar
                </button>
                <button className="btn btn-info" onClick={handleDivide}>
                  Dividir
                </button>
                <button className="btn btn-secondary" onClick={handleReset}>
                  Reiniciar
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculatora;