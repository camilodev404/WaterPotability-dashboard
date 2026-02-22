import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home/home.component';
import { PredictPageComponent } from './pages/predict/predict.component';
import { MetricsPageComponent } from './pages/metrics/metrics.component';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'metricas', component: MetricsPageComponent },
  { path: 'predicciones', component: PredictPageComponent },
  { path: 'metrics', redirectTo: 'metricas', pathMatch: 'full' },
  { path: 'predict', redirectTo: 'predicciones', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
