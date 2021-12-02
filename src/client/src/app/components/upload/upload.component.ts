import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';
import { AppState } from 'src/app/store';
import { loadTweets } from 'src/app/store/actions/user/user.actions';
// import { UserTweetSelector } from 'src/app/store/selectors/user/user.selectors';
import { Tweet } from '../../../../../shared/models/profile.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
    //  tweets$: Observable<Tweet[]>;
    //   selectedFile = null;
    //   images: any;
    public searchTerm: string = '';
      file: File | null = null;  
      files: any = [];

      constructor(private http: HttpClient,
        private store: Store<AppState>,
        private router: Router,
        private userService: UserService) { 
          
    //       this.store.dispatch(loadTweets());
    // this.tweets$ = this.store.select(UserTweetSelector);
        }

  ngOnInit(): void {
    this.getFiles();
  }

  Upload(event:any) {
    
    const files = (<HTMLInputElement>event.target).files;
    console.log(files);
    if (files) {
    this.file = files[0];
    }
  }

  onUpload(){
    
    if (!this.file) {
      return alert('select a file first')
    }
    const fd = new FormData();
    fd.append('file', this.file);
    this.http.post<any>('http://localhost:3000/api/upload', fd)
    .subscribe();
    this.file = null;
  }

  getFiles() {
    this.http.get<any>('http://localhost:3000/api/files').subscribe(files => this.files = files);
  }

  stream(filename: string){
    this.router.navigate(['gallery', filename]);
  }

  delete(id: string){
    this.http.post<any>('http://localhost:3000/api/files/del/' + id, null).subscribe(files => this.files = files);
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.userService.search.next(this.searchTerm);
  }
 
}
