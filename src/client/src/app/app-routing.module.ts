import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageUsersComponent } from './pages/page-users/page-users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FbGuardGuard } from './guards/fbguard.guard';
import { PostsComponent } from './components/posts/posts.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RowsComponent } from './components/rows/rows.component';
import { UploadComponent } from './components/upload/upload.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  // {
  //   path: '', 
  //   // redirectTo: 'login',
  //   component: HomeComponent,
  // },

  
  {
    path: 'login', 
    component: LoginComponent,
  },
  {
    path: 'users', 
    component: PageUsersComponent,
  },
  {
    path: 'register', 
    component: RegisterComponent,
  },
  
  {
    path: '', 
    // component: HomeComponent,canActivate: [FbGuardGuard],
    component: HomeComponent,
  },

  {
    path: 'posts', 
    component: PostsComponent,
  },

  {
    path: 'sidebar', 
    component: SidebarComponent,
  },

  {
    path: 'header', 
    component: HeaderComponent,
  },

  {
    path: 'rows',
    component: RowsComponent,
  },

  {
    path: 'upload',
    // component: UploadComponent,
    component: UploadComponent,canActivate: [FbGuardGuard],
  },
  {path: 'gallery/:filename', component: GalleryComponent},

  {
    path: 'create-profile',
    component: CreateProfileComponent,
  },

  {
    path: 'search',
    component: SearchComponent,
  }
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
