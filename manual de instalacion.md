# Manual de Instalación - Water Potability Dashboard

## 1. Objetivo
Este manual explica cómo instalar y ejecutar el tablero (`WaterPotability-dashboard`) junto con la API y los modelos usando Docker Compose.

## 2. ¿Cuántos repositorios necesito?
Para ejecutar el `docker-compose.yml` de este repositorio **sin cambios**, necesitas clonar **3 repositorios** en la misma carpeta padre:

1. `WaterPotability` (datos y artefactos de entrenamiento)
2. `WaterPotability-ms` (API FastAPI)
3. `WaterPotability-dashboard` (frontend Angular)

La razón: el build de la API usa archivos del repositorio `WaterPotability` (modelos y dataset para métricas).

## 3. Prerrequisitos
- Docker Desktop o Docker Engine + Docker Compose (v2)
- Git
- Puertos libres: `4200` y `8000`

## 4. Estructura esperada de carpetas
Debes tener algo así:

```text
workspace/
  WaterPotability/
  WaterPotability-ms/
  WaterPotability-dashboard/
```

## 5. Clonado de repositorios
Desde la carpeta `workspace`:

```bash
git clone <URL-REPO-WaterPotability>
git clone <URL-REPO-WaterPotability-ms>
git clone <URL-REPO-WaterPotability-dashboard>
```

## 6. Levantar todo con Docker Compose
Entra al repositorio del dashboard y ejecuta:

```bash
cd WaterPotability-dashboard
docker compose up --build
```

## 7. Verificación de servicios
- Frontend: http://localhost:4200
- API Health: http://localhost:8000/api/v1/health
- API Docs: http://localhost:8000/docs

## 8. Apagar servicios
Desde `WaterPotability-dashboard`:

```bash
docker compose down
```

## 9. Problemas comunes
### 9.1 El build de API falla por archivos no encontrados
Valida que los 3 repositorios estén en la estructura esperada (misma carpeta padre).

### 9.2 Puerto ocupado
Cierra procesos en `4200` o `8000`, o cambia puertos en `docker-compose.yml`.

### 9.3 Front no conecta API
Verifica que `api` esté healthy:

```bash
docker compose ps
```

## 10. ¿Se puede correr solo con 2 repositorios?
Sí, pero no con este compose tal cual.
Necesitarías adaptar build/config de API para no depender de `WaterPotability` y copiar manualmente:
- dataset de métricas
- artefactos de ambos modelos

Para uso estándar del proyecto, la opción recomendada es usar los **3 repositorios**.
