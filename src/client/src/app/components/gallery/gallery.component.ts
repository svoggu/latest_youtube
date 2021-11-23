import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  filename: string = '';
  constructor( private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.filename = params['filename'];
    });
  }

}
