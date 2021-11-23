import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.scss']
})
export class RowsComponent implements OnInit {

  @Input() selected: string = '';
  @Input() icon: string = '';
  @Input() svg: string = '';
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
