import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  font = 'garamond';
  size ='25';
  align = 'left';
  color = 'blue';
  constructor() { }

  ngOnInit(): void {
  }

  changeAlignment(align: string) {
    this.align = align;
  }

}
