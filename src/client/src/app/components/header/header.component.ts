import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any = null;
  searchTerm: any;

  constructor(
    private router: Router,
    public videoService: VideoService,
  ) { }

  ngOnInit(): void { }

  public submit(form: NgForm): void {
    if (form.valid) {
      this.router.navigate(['search', form.value.search])
    }
  }
  
  onSearch(){
    this.videoService.filteredItems(this.searchTerm)
  }

}
