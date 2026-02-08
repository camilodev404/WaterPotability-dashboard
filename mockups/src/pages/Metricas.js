import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Metricas.css';

const dataBar = [
  { name: 'Enero', valor: 4000 },
  { name: 'Febrero', valor: 3000 },
  { name: 'Marzo', valor: 5000 },
  { name: 'Abril', valor: 4500 },
  { name: 'Mayo', valor: 6000 },
  { name: 'Junio', valor: 5500 }
];

const dataLine = [
  { name: 'Sem 1', calidad: 85 },
  { name: 'Sem 2', calidad: 88 },
  { name: 'Sem 3', calidad: 82 },
  { name: 'Sem 4', calidad: 90 },
  { name: 'Sem 5', calidad: 87 },
  { name: 'Sem 6', calidad: 92 }
];

function Metricas() {
  const navigate = useNavigate();

  return (
    <div className="metricas-page">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Volver
      </button>
      
      <div className="metricas-container">
        <h1 className="metricas-title">Métricas</h1>
        
        <div className="charts-grid">
          <div className="chart-card">
            <h3 className="chart-title">Análisis Mensual</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataBar}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="valor" fill="#667eea" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3 className="chart-title">Tendencia de Calidad</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dataLine}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="calidad" stroke="#764ba2" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metricas;
