export type ModelName = 'decision_tree' | 'neural_network';

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
  model_name: ModelName;
}

export interface PredictResponse {
  model_name: ModelName;
  prediction: number;
  label: string;
}

export interface ModelMetrics {
  model_name: ModelName;
  model_id: string;
  model_version: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1_score: number;
}

export interface MetricsResponse {
  models: ModelMetrics[];
}
