import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../../../../shared/models/user.model';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Post } from '../../../../shared/models/post.model';
import { Tweet } from '../../../../shared/models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUserId = '';

  constructor(private api: ApiService, 
    private router: Router) {}

  getUsers() {
    return this.api.get<{ data: User[] }>('users').pipe(map((res) => res.data));
  }
  createUser(user: User) {
    return this.api
      .post<{ data: User }, User>('create-user', user)
      .pipe(map((res) => res.data));
  }
  login(user: Partial<User>) {
    return this.api
      .post<{ data: User },Partial<User>>('login', user)
      .pipe(map((res) => res.data),
      tap(()=> this.router.navigate(['upload']) ))
      // catchError(()=> this.router.navigate(['register'])));
        }

  loginNavigate(){
    return of(this.router.navigate(['/home']))
        }

  logout() {
    
    this.router.navigate(['/login']);
    return this.api.get('logout')
          
        }

  updateUser(user: User) {
    return this.api.put<{data:User},User>('update-user/' + user._id, user);
  }

  deleteUser(user: User) {
    return this.api
      .delete<{ data: User }>('delete-user/' + user._id)
      .pipe(map((res) => res.data));
  }

  selectUser(id: string) {
    this.selectedUserId = id;
  }

  //
  getTweets() {
    return this.api.get<{ data: Tweet[] }>('tweets').pipe(map((res) => res.data));
  }

  // createTweets( tweet: Tweet) {
  //   return this.api
  //     .post<{data: Tweet}>('create-tweet', tweet)
  //     .pipe(map((res) => res.data))
  // }
}
