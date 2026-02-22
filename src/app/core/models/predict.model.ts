export interface PredictRequest {
  ph: number;
  Hardness: number;
  Solids: number;
  Chloramines: number;
  Sulfate: number;
  Conductivity: number;
  Organic_carbon: number;
  Trihalomethanes: number;
  Turbidity: number;
}

export interface PredictResponse {
  prediction: number;
  label: string;
}

export interface MetricsResponse {
  model_id: string;
  model_version: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1_score: number;
}
