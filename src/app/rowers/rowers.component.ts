import { Component, OnInit } from '@angular/core';
import { Rower } from '../rower';
import { ROWERS } from '../mock-rowers';

@Component({
  selector: 'app-rowers',
  templateUrl: './rowers.component.html',
  styleUrls: ['./rowers.component.css']
})
export class RowersComponent implements OnInit {
  rowers = ROWERS;
  selectedRower: Rower;
  onSelect(rower: Rower): void {
    this.selectedRower = rower;
  }
  constructor() { }

  ngOnInit() {
  }

}
