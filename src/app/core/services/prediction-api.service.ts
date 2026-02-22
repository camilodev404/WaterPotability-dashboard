import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { MetricsResponse, PredictRequest, PredictResponse } from '../models/predict.model';

@Injectable({ providedIn: 'root' })
export class PredictionApiService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  predict(payload: PredictRequest): Observable<PredictResponse> {
    return this.http.post<PredictResponse>(`${this.baseUrl}/predict`, payload);
  }

  health(): Observable<{ status: string }> {
    return this.http.get<{ status: string }>(`${this.baseUrl}/health`);
  }

  metrics(): Observable<MetricsResponse> {
    return this.http.get<MetricsResponse>(`${this.baseUrl}/metrics`);
  }
}
