import { Component, OnInit } from '@angular/core';
import { tabMatricules } from '../mock/matricules.mock';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  nameSearch = '';
  listeMatricules: Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  nameChange(nameInput: string) {
    this.nameSearch = nameInput;
  }

  searchByName() {
    console.log('liste');

    this.listeMatricules = this.dataService.rechercherParNom(this.nameSearch);
    console.log(this.listeMatricules);
  }

  detailsCollegue(matricule: string) {
    this.dataService.rechercherParMatricule(matricule).subscribe(
      () => {},
      error => console.log(error)
    );
  }
}
