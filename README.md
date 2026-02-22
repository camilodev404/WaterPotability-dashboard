# Water Potability Dashboard (Angular)

Frontend Angular para visualizar metricas del modelo y realizar predicciones consumiendo la API.

## Requisitos

- Node.js 18+


✅ Simple  
✅ Fácil de usar  

Este repositorio contiene únicamente la interfaz de usuario.  
No incluye entrenamiento del modelo ni lógica del API.

---

# 👥 Integrantes del Proyecto

- Cristian Camilo Nino Rincon
- Sandra Milena Pantoja Cárdenas
- Nombre Apellido
- Nombre Apellido

---

# 📌 Descripción General

Este frontend forma parte de una arquitectura modular:

- 🤖 Repositorio del Modelo → Entrenamiento y métricas (https://github.com/camilodev404/WaterPotability)
- 🚀 API → Inferencias del modelo (https://github.com/camilodev404/WaterPotability-ms)
- 🎨 Frontend (https://github.com/camilodev404/WaterPotability-dashboard) → Interfaz visual

El sistema tendrá **dos vistas principales**:

1️⃣ Visualización de métricas del modelo en producción  
2️⃣ Dashboard de predicción donde el usuario ingresa variables y obtiene el resultado de potabilidad

---

# 🧱 Arquitectura del Proyecto

```
project-root/
│
├── src/
│ ├── app/
│ │ ├── core/
│ │ ├── services/
│ │ ├── pages/
│ │ │ ├── metrics/
│ │ │ └── predict/
│ │ │
│ │ ├── components/
│ │ └── shared/
│ │
│ ├── assets/
│ └── environments/
│
├── angular.json
├── package.json
└── README.md
```


---

# ⚙️ Tecnologías

- Angular
- TypeScript
- RxJS
- Angular Router
- CSS / SCSS
- Charts Library (Chart.js / ngx-charts — TBD)

---

# 🖥️ Vistas Principales

## 📊 1. Métricas del Modelo (Production Metrics)

Pantalla simple para visualizar información del modelo desplegado.

Posibles métricas:

- Accuracy
- Precision
- Recall
- F1 Score
- ROC-AUC
- Última versión del modelo

La vista consumirá datos desde el API.

Ejemplo conceptual:

GET /metrics


---

## 🧪 2. Dashboard de Predicción

Vista principal donde el usuario ingresará las variables independientes.

### Inputs esperados

- pH
- Hardness
- Solids
- Chloramines
- Sulfate
- Conductivity
- Organic Carbon
- Trihalomethanes
- Turbidity

### Flujo

1. Usuario llena formulario
2. Frontend envía request al API
3. API devuelve resultado
4. UI muestra:

- Potable / No potable
- Probabilidad o confianza

Ejemplo conceptual:

POST /predict


---

# 🔌 Integración con el API

El frontend consumirá el API REST del proyecto.

Configuración en:

src/environments/environment.ts


Ejemplo:

```ts
export const environment = {
  production: false,
  apiUrl: "http://localhost:8000"
};

# 🚀 Instalación
=======
## Ejecutar en local
>>>>>>> 8a5e55c4 (first version)

```bash
npm install
npm start
```

El dashboard levanta en `http://localhost:4200` y usa `proxy.conf.json` para enrutar `/api` a `http://localhost:8000`.

## Build de produccion

```bash
npm run build
```

Salida en `dist/waterpotability-dashboard/browser`.
