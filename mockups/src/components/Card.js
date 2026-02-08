import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card({ title, icon, route }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(route)}>
      <div className="card-icon">{icon}</div>
      <h2 className="card-title">{title}</h2>
      <div className="card-arrow">→</div>
    </div>
  );
}

export default Card;