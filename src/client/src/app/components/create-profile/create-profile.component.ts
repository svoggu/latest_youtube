import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { AppState } from 'src/app/store';
import { loadTweets } from 'src/app/store/actions/user/user.actions';

// import { Tweet } from '../../../../../shared/models/profile.model';
// import { Profile } from '../../../../../shared/models/profile.model';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {
  // tweets$: Observable<Tweet[]>;
  images: any;
  constructor(
    private userService: UserService,
    private store: Store<AppState>,
    // private socketService: SocketService,
    private router: Router,
    private https:HttpClient
  ) { 
    // this.store.dispatch(loadTweets());
    // this.tweets$ = this.store.select(UserTweetSelector);
  }

  ngOnInit(): void {
    
  }
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.images);

    this.https.post<any>('http://localhost:3504/file', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
