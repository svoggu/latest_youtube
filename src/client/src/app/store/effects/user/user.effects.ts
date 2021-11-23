import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import {
  createTweet,
  createTweetFailure,
  createTweetSuccess,
  createUser,
  createUserFailure,
  createUserSuccess,
  deleteUser,
  deleteUserFailure,
  deleteUserSuccess,
  loadTweetFailure,
  loadTweets,
  loadTweetSuccess,
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
  loginFailureRedirect,
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  logOutUser,
  logOutUserFailure,
  logOutUserSuccess,
  updateUser,
  updateUserFailure,
  updateUserSuccess,
} from '../../actions/user/user.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((data) => loadUsersSuccess({ data })),
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
  );

  updateUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      mergeMap((action) =>
        this.userService.updateUser(action.data).pipe(
          map((data) => updateUserSuccess( data )),
          catchError((error) => of(updateUserFailure({ error })))
        )
      )
    )
  );

  createUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUser),
      mergeMap((action) =>
        this.userService.createUser(action.data).pipe(
          map((data) => createUserSuccess({ data })),
          catchError((error) => of(createUserFailure({ error })))
        )
      )
    )
  );

  deleteUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      mergeMap((action) =>
        this.userService.deleteUser(action.data).pipe(
          map((data) => deleteUserSuccess({ data })),
          catchError((error) => of(deleteUserFailure({ error })))
        )
      )
    )
  );

  loginUsers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loginUser),
    mergeMap((action) =>
      this.userService.login(action.data).pipe(
        map((data) => loginUserSuccess({ data })),
        catchError((error) => of(loginUserFailure({ error })))
      )
    )
  )
);

loginFailure$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loginUserFailure),
    mergeMap((action) =>{
      console.log(action);
     this.router.navigate(['register']);
     return of(loginFailureRedirect()) }
      
    )
  )
);

logoutUsers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(logOutUser),
    mergeMap((action) =>
      this.userService.logout().pipe(
        map((data) => logOutUserSuccess()),
        catchError((error) => of(logOutUserFailure()))
      )
    )
  )
);

//

// createUserTweets$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(createTweet),
//       mergeMap((action) =>
//         this.userService.createTweets(action.data).pipe(
//           map((data) => createTweetSuccess({ data })),
//           catchError((error) => of(createTweetFailure({ error })))
//         )
//       )
//     )
//   );

  loadTweets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTweets),
      mergeMap((action) =>
        this.userService.getTweets().pipe(
          map((data) => loadTweetSuccess({ data })),
          catchError((error) => of(loadTweetFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService, private router: Router) {}
}
