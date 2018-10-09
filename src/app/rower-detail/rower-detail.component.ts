import { Component, OnInit, Input } from '@angular/core';

import { Rower } from '../rower';

@Component({
  selector: 'app-rower-detail',
  templateUrl: './rower-detail.component.html',
  styleUrls: ['./rower-detail.component.css']
})
export class RowerDetailComponent implements OnInit {
  @Input() rower: Rower;

  constructor() { }

  ngOnInit() {
  }

}
