import { Component, OnInit } from '@angular/core';
import { DecimalPipe, NgFor, NgIf, PercentPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MetricsResponse, ModelMetrics } from '../../core/models/predict.model';
import { PredictionApiService } from '../../core/services/prediction-api.service';

@Component({
  selector: 'app-metrics-page',
  standalone: true,
  imports: [NgIf, NgFor, DecimalPipe, PercentPipe, RouterLink],
  templateUrl: './metrics.component.html',
  styleUrl: './metrics.component.css',
})
export class MetricsPageComponent implements OnInit {
  metrics: MetricsResponse | null = null;
  errorMessage = '';

  constructor(private readonly api: PredictionApiService) {}

  ngOnInit(): void {
    this.api.metrics().subscribe({
      next: (data) => {
        this.metrics = data;
      },
      error: () => {
        this.errorMessage =
          'No fue posible cargar metricas. Verifica la conexion con el backend.';
      },
    });
  }

  performanceBars(model: ModelMetrics): Array<{ label: string; value: number }> {
    if (!model) {
      return [];
    }

    return [
      { label: 'Accuracy', value: model.accuracy },
      { label: 'Precision', value: model.precision },
      { label: 'Recall', value: model.recall },
      { label: 'F1 Score', value: model.f1_score },
    ];
  }

  modelLabel(modelName: string): string {
    return modelName === 'neural_network' ? 'Red Neuronal' : 'Árbol de Decisión';
  }

  barX(index: number): number {
    return 55 + index * 110;
  }

  barY(value: number): number {
    const chartTop = 30;
    const chartHeight = 220;
    return chartTop + (1 - value) * chartHeight;
  }

  barHeight(value: number): number {
    return value * 220;
  }
}
