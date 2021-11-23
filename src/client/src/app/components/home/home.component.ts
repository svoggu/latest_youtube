import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { AppState } from 'src/app/store';
import { createPost, loadPosts } from 'src/app/store/actions/post/post.actions';
import { logOutUser } from 'src/app/store/actions/user/user.actions';
import { postsSelector } from 'src/app/store/selectors/post/post.selectors';
import { Post } from '../../../../../shared/models/post.model';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  about: boolean = false;

  constructor(private router: Router,
              private store: Store<AppState>,
              private fb: FormBuilder,
              
             ) {   }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }

  goToUsers(){
    this.router.navigate(['/users']);
  }

  logout() {
    
    this.store.dispatch(logOutUser());
    
  }
 
  
}
