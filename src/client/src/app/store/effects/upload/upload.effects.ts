import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadUploads, loadUploadsFailure, loadUploadsSuccess } from '../../actions/upload/upload.actions';



@Injectable()
export class UploadEffects {
//   loadUploads$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(loadUploads),
//     mergeMap(() =>
//       this.uploadService.getUploads().pipe(
//         map((data) => loadUploadsSuccess({ data })),
//         catchError((error) => of(loadUploadsFailure({ error })))
//       )
//     )
//   )
// );


  constructor(private actions$: Actions) {}

}
