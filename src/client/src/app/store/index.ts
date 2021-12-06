import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './reducers/user/user.reducer';
import * as fromPost from './reducers/post/post.reducer';
// import * as fromUpload from './upload/reducers/upload.reducer';


export interface AppState {

  [fromUser.userFeatureKey]: fromUser.State;
  [fromPost.postFeatureKey]: fromPost.State;
  // [fromUpload.uploadFeatureKey]: fromUpload.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromUser.userFeatureKey]: fromUser.reducer,
  [fromPost.postFeatureKey]: fromPost.reducer,
  // [fromUpload.uploadFeatureKey]: fromUpload.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
