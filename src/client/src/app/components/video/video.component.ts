import { Component, Input, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() image: string = '';
  @Input() channel: string = '';
  @Input() live: string = 'false';
  @Input() title: string = '';
  @Input() views: string = '';
  @Input() timestamp: string = '';

  constructor(public videoService: VideoService) { 
    
  }

  ngOnInit(): void {
  }

}
