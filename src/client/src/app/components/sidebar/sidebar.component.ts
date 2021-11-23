import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { logOutUser } from 'src/app/store/actions/user/user.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) { }
  // public logOut(): void {
  //   this.api
  //     .signOut()
  //     .then(() => this.route.navigate(['login']))
  //     .catch((error) => console.log(error.message))
  // }

  logOut() {
    
    this.store.dispatch(logOutUser());
    
  }
  ngOnInit(): void { }

}
