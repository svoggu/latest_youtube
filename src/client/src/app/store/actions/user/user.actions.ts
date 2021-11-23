import { createAction, props } from '@ngrx/store';
import { Error } from 'mongoose';
import { Tweet } from '../../../../../../shared/models/profile.model';
import { User } from '../../../../../../shared/models/user.model';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: Error }>()
);

export const selectUserAction = createAction(
  '[User] Select User',
  props<{ data: User | null }>()
);

export const createUser = createAction(
  '[User] Create User',
  props<{data: User}>()
);

export const createUserSuccess = createAction(
  '[User] Create User Success',
  props<{ data: User }>()
);

export const createUserFailure = createAction(
  '[User] Create User Failure',
  props<{ error: Error }>()
);

export const updateUser = createAction(
  '[User] Update User',
  props<{data: User}>()
);

export const updateUserSuccess = createAction(
  '[User] Update User Success',
  props<{ data: User }>()
);

export const updateUserFailure = createAction(
  '[User] Update User Failure',
  props<{ error: Error }>()
);

export const deleteUser = createAction(
  '[User] Delete User',
  props<{data: User}>()
);

export const deleteUserSuccess = createAction(
  '[User] Delete User Success',
  props<{ data: User }>()
);

export const deleteUserFailure = createAction(
  '[User] Delete User Failure',
  props<{ error: Error }>()
);

export const loginUser = createAction(
  '[User] Login User',
  props<{data: Partial<User>}>()
);

export const loginUserSuccess = createAction(
  '[User] Login User Success',
  props<{ data: User }>()
);

export const loginUserFailure = createAction(
  '[User] Login User Failure',
  props<{ error: Error }>()
);

export const loginFailureRedirect = createAction(
  '[User] Login Failure Redirect',
  
);

export const logOutUser = createAction(
  '[User] Logout User',
 );

export const logOutUserSuccess = createAction(
  '[User] Logout User Success',
  );

export const logOutUserFailure = createAction(
  '[User] Login User Failure',
  );

  //

  export const createTweet = createAction(
    '[User] Create Tweet',
    props<{data: Tweet}>()
  );
  
  export const createTweetSuccess = createAction(
    '[User] Create Tweet success',
    props<{data: Tweet}>()
  );
  export const createTweetFailure = createAction(
    '[User] Create Tweet Failure',
    props<{ error: Error }>()
  );

  export const loadTweets = createAction(
    '[User] load Tweet',
  );
  export const loadTweetSuccess = createAction(
    '[User]  Load Tweet Success',
    props<{ data: Tweet[]}>()
  );
  
  export const loadTweetFailure = createAction(
    '[User] Load Tweet Failure',
    props<{ error: Error }>()
  );