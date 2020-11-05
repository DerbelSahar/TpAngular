import { Component, OnInit } from '@angular/core';
import { RainbowDirective } from './../../rainbow.directive';
@Component({
  selector: 'app-rainbow-component',
  templateUrl: './rainbow-component.component.html',
  styleUrls: ['./rainbow-component.component.css']
})
export class RainbowComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
