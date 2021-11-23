import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any = null;
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }

  public submit(form: NgForm): void {
    if (form.valid) {
      this.router.navigate(['search', form.value.search])
    }
  }
}
