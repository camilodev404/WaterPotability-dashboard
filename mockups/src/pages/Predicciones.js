import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import './Predicciones.css';

function Predicciones() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ph: '',
    hardness: '',
    solids: '',
    chloramines: '',
    sulfate: '',
    conductivity: '',
    organic_carbon: '',
    trihalomethanes: '',
    turbidity: ''
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [isPotable, setIsPotable] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePredict = () => {
    // Simulación de predicción (50% de probabilidad)
    // En producción aquí irá tu llamada al modelo ML
    const randomPrediction = Math.random() > 0.5;
    setIsPotable(randomPrediction);
    setModalOpen(true);
  };

  const handleClear = () => {
    setFormData({
      ph: '',
      hardness: '',
      solids: '',
      chloramines: '',
      sulfate: '',
      conductivity: '',
      organic_carbon: '',
      trihalomethanes: '',
      turbidity: ''
    });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="predicciones-page">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Volver
      </button>

      <div className="predicciones-container">
        <h1 className="predicciones-title">Predicción de Potabilidad</h1>

        <div className="form-card">
          <div className="form-grid">
            <div className="form-group">
              <label>pH</label>
              <input
                type="number"
                name="ph"
                value={formData.ph}
                onChange={handleChange}
                placeholder="Ingrese pH"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label>Hardness</label>
              <input
                type="number"
                name="hardness"
                value={formData.hardness}
                onChange={handleChange}
                placeholder="Ingrese dureza"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label>Solids</label>
              <input
                type="number"
                name="solids"
                value={formData.solids}
                onChange={handleChange}
                placeholder="Ingrese sólidos"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label>Chloramines</label>
              <input
                type="number"
                name="chloramines"
                value={formData.chloramines}
                onChange={handleChange}
                placeholder="Ingrese cloraminas"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label>Sulfate</label>
              <input
                type="number"
                name="sulfate"
                value={formData.sulfate}
                onChange={handleChange}
                placeholder="Ingrese sulfato"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label>Conductivity</label>
              <input
                type="number"
                name="conductivity"
                value={formData.conductivity}
                onChange={handleChange}
                placeholder="Ingrese conductividad"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label>Organic Carbon</label>
              <input
                type="number"
                name="organic_carbon"
                value={formData.organic_carbon}
                onChange={handleChange}
                placeholder="Ingrese carbono orgánico"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label>Trihalomethanes</label>
              <input
                type="number"
                name="trihalomethanes"
                value={formData.trihalomethanes}
                onChange={handleChange}
                placeholder="Ingrese trihalometanos"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label>Turbidity</label>
              <input
                type="number"
                name="turbidity"
                value={formData.turbidity}
                onChange={handleChange}
                placeholder="Ingrese turbidez"
                step="0.01"
              />
            </div>
          </div>

          <div className="buttons-container">
            <button className="predict-button" onClick={handlePredict}>
              Predecir
            </button>
            <button className="clear-button" onClick={handleClear}>
              Limpiar
            </button>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        isPotable={isPotable}
      />
    </div>
  );
}

export default Predicciones;