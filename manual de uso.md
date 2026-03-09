# Manual de Uso - Dashboard de Potabilidad

## 1. Objetivo de la interfaz
El dashboard permite:
- Realizar predicciones de potabilidad.
- Comparar métricas de dos modelos en una sola vista:
  - Árbol de Decisión
  - Red Neuronal

## 2. Pantallas disponibles
- **Inicio**: acceso a módulos principales.
- **Predicción**: formulario para evaluar una muestra de agua.
- **Métricas**: rendimiento de ambos modelos en la misma página.

## 3. Flujo de uso recomendado

## Paso 1: ir a Predicción
En la navegación principal, entra a **Predicción**.

## Paso 2: seleccionar modelo
En el campo **Modelo** elige uno:
- `Árbol de Decisión`
- `Red Neuronal`

## Paso 3: diligenciar variables
Completa todos los campos:
- `pH` (0 a 14)
- `Hardness`
- `Solids`
- `Chloramines`
- `Sulfate`
- `Conductivity`
- `Organic_carbon`
- `Trihalomethanes`
- `Turbidity`

## Paso 4: ejecutar predicción
Haz clic en **Predecir**.
El sistema mostrará resultado:
- `Potable` o `Not Potable`
- Modelo usado en la predicción

## Paso 5: limpiar formulario (opcional)
Usa **Limpiar** para reiniciar campos y volver al modelo por defecto.

## 4. Cómo interpretar la vista de Métricas
En **Métricas** verás dos bloques (uno por modelo):
- Gráfica con `Accuracy`, `Precision`, `Recall`, `F1 Score`
- Detalle con `Model ID` y versión

Úsala para comparar desempeño entre modelos en la misma pantalla.

## 5. Recomendaciones de uso
- Evalúa la misma muestra con ambos modelos para contrastar resultados.
- Si hay diferencias, revisa la página de métricas antes de decidir el modelo preferido.

## 6. Mensajes de error comunes
- **No fue posible obtener la predicción**: API no disponible o datos inválidos.
- **No fue posible cargar métricas**: API caída o dataset de métricas no accesible.

## 7. Buenas prácticas para pruebas funcionales
- Probar al menos 3 escenarios de datos (conservador, intermedio, extremo).
- Probar ambos modelos para cada escenario.
- Confirmar respuesta visual (modal, etiquetas y valores).

## 8. Escenarios sugeridos para probar

### Escenario 1: Intermedio (normal)
Usa estos valores:

- `pH`: `7.2`
- `Hardness`: `204.9`
- `Solids`: `20791`
- `Chloramines`: `7.3`
- `Sulfate`: `368.5`
- `Conductivity`: `564.3`
- `Organic_carbon`: `10.4`
- `Trihalomethanes`: `86.9`
- `Turbidity`: `2.9`

### Escenario 2: Riesgo alto
Usa estos valores:

- `pH`: `5.4`
- `Hardness`: `120.0`
- `Solids`: `36000`
- `Chloramines`: `11.5`
- `Sulfate`: `180.0`
- `Conductivity`: `780.0`
- `Organic_carbon`: `18.2`
- `Trihalomethanes`: `120.0`
- `Turbidity`: `6.8`

### Escenario 3: Condiciones más estables
Usa estos valores:

- `pH`: `7.8`
- `Hardness`: `240.0`
- `Solids`: `15000`
- `Chloramines`: `6.0`
- `Sulfate`: `330.0`
- `Conductivity`: `420.0`
- `Organic_carbon`: `9.2`
- `Trihalomethanes`: `65.0`
- `Turbidity`: `3.1`

Recomendación: ejecutar cada escenario 2 veces, una con `Árbol de Decisión` y otra con `Red Neuronal`, para comparar resultados.
