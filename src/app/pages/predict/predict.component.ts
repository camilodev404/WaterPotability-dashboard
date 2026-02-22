import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { PredictionApiService } from '../../core/services/prediction-api.service';
import { PredictResponse } from '../../core/models/predict.model';
import { ResultModalComponent } from '../../shared/components/result-modal/result-modal.component';

@Component({
  selector: 'app-predict-page',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, RouterLink, ResultModalComponent],
  templateUrl: './predict.component.html',
  styleUrl: './predict.component.css',
})
export class PredictPageComponent {
  loading = false;
  errorMessage = '';
  modalOpen = false;
  isPotable = false;
  predictionResult: PredictResponse | null = null;

  readonly form = this.fb.group({
    ph: [null as number | null, [Validators.required, Validators.min(0), Validators.max(14)]],
    Hardness: [null as number | null, [Validators.required]],
    Solids: [null as number | null, [Validators.required]],
    Chloramines: [null as number | null, [Validators.required]],
    Sulfate: [null as number | null, [Validators.required]],
    Conductivity: [null as number | null, [Validators.required]],
    Organic_carbon: [null as number | null, [Validators.required]],
    Trihalomethanes: [null as number | null, [Validators.required]],
    Turbidity: [null as number | null, [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly api: PredictionApiService,
  ) {}

  handlePredict(): void {
    this.errorMessage = '';
    this.predictionResult = null;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMessage = 'Completa todos los campos antes de predecir.';
      return;
    }

    this.loading = true;
    this.api
      .predict(this.form.getRawValue() as any)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (response) => {
          this.predictionResult = response;
          this.isPotable = response.prediction === 1;
          this.modalOpen = true;
        },
        error: () => {
          this.errorMessage =
            'No fue posible obtener la prediccion. Verifica que la API este activa.';
        },
      });
  }

  handleClear(): void {
    this.form.reset();
    this.errorMessage = '';
    this.predictionResult = null;
  }

  closeModal(): void {
    this.modalOpen = false;
  }
}
