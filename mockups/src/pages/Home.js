import React from 'react';
import Card from '../components/Card';
import MemberCard from '../components/MemberCard';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <div className="header-top">
          <img 
            src={process.env.PUBLIC_URL + '/logo-uniandes.png'}
            alt="Logo Universidad de los Andes" 
            className="university-logo"
          />
          <div className="title-container">
            <h1 className="home-title">PREDICCIÓN DE LA POTABILIDAD DEL AGUA USANDO MACHINE LEARNING</h1>
          </div>
        </div>
        <div className="home-subtitle">Sistema de Análisis y Predicción</div>
      </div>

      <div className="cards-container">
        <Card 
          title="Métricas" 
          icon="📊" 
          route="/metricas"
        />
        <Card 
          title="Predicciones" 
          icon="🔮" 
          route="/predicciones"
        />
      </div>

      <div className="members-section">
        <h2 className="members-title">Integrantes</h2>
        <div className="members-container">
          <MemberCard 
            name="Sandra Pantoja"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
          />
          <MemberCard 
            name="Yeisson Galindo"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"
          />
          <MemberCard 
            name="Cristian Camilo Nino"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Luna"
          />
          <MemberCard 
            name="John Arley Jimenez"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Max"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;