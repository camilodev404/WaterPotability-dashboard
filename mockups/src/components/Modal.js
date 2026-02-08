import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, isPotable }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className={`result-icon ${isPotable ? 'potable' : 'no-potable'}`}>
          {isPotable ? '✓' : '✗'}
        </div>

        <h2 className="modal-title">
          {isPotable ? 'Agua Potable' : 'Agua No Potable'}
        </h2>

        <p className="modal-message">
          {isPotable 
            ? 'El agua analizada cumple con los estándares de calidad para consumo humano.'
            : 'El agua analizada NO cumple con los estándares de calidad para consumo humano.'}
        </p>

        <div className={`status-badge ${isPotable ? 'potable' : 'no-potable'}`}>
          {isPotable ? 'APTA PARA CONSUMO' : 'NO APTA PARA CONSUMO'}
        </div>

        <button className="modal-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Modal;