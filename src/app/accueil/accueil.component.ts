import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  unObjetCollegueFourni: Collegue = new Collegue();

  constructor() { }

  ngOnInit() {
  }

}
