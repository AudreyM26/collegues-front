import { Component, OnInit } from '@angular/core';
import { tabMatricules } from '../mock/matricules.mock';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  nameSearch = '';
  listeMatricules : string[];

  listeCols: Collegue[];

  constructor() { }

  ngOnInit() {
  }

  nameChange(nameInput: string) {
    this.nameSearch = nameInput;
  }

  searchByName() {
    console.log('liste');
    this.listeMatricules = tabMatricules;

    /*
    new Promise(resolve => {
      // promesse résolue après 1s
      window.setTimeout(() => {

        console.log(this.tabCollegues);
        this.tabCollegues.forEach(col => {
          //if (col.nom === this.nameSearch) {
            //this.listeCols.push(col);
          //}
          resolve(col);
        });

      }
        , 2000);
    }).then((data: string) => {
      console.log(data);
    });*/

  }
}
