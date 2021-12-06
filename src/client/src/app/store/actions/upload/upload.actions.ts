import { createAction, props } from '@ngrx/store';

export const loadUploads = createAction(
  '[Upload] Load Uploads'
);

export const loadUploadsSuccess = createAction(
  '[Upload] Load Uploads Success',
  props<{ data: any }>()
);

export const loadUploadsFailure = createAction(
  '[Upload] Load Uploads Failure',
  props<{ error: any }>()
);
