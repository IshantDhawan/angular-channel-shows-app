import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-list-shows]',
  templateUrl: './list-shows.component.html',
  styleUrls: ['./list-shows.component.css']
})
export class ListShowsComponent implements OnInit {
@Input() channelData;

  constructor() { }

  ngOnInit(): void {
  
  }

}
