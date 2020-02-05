import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input() col: Collegue;
  modeEdit = false;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  modifyCol() {
    console.log('Modification du collègue');
    this.modeEdit = true;
  }

  createCol() {
    console.log('Création d\'un nouveau collègue');
  }

  validForm() {
    this.modeEdit = false;
  }
}
