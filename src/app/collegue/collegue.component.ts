/**
 * si date de naissance a modifier : this.dateNaissanceInput = this.dp.transform(this.col.dateDeNaissance, 'yyyy-MM-dd');
 * pour afficher dans champ date : utilisation de DatePipe
 */

import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input() col: Collegue;

  modeEdit = false;
  modeCreate = false;
  buttonText = '';
  newCollegue: Collegue = new Collegue();
  messageErreur: string;
  messageOk: string;
  matricule: string;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.matricule = params.get('matricule');
      });

    this.col.photoUrl = 'https://previews.123rf.com/images/kritchanut/kritchanut1405/kritchanut140500053/28162597-homme-ic%C3%B4ne-silhouette-portrait.jpg';
    // abonnement
    this.dataService.subjectDetailsCollegue.subscribe(
      collegueDetail => {
        this.col = collegueDetail;
        this.modeCreate = false;
        this.modeEdit = false;
        console.log('collegue reçu', collegueDetail);
      }
    );
  }

  modifyCol() {
    console.log('Modification du collègue');
    this.modeEdit = true;
    this.modeCreate = false;
    this.buttonText = 'Valider';
  }

  createCol() {

    console.log('Création d\'un nouveau collègue');
    this.modeCreate = true;
    this.modeEdit = false;
    this.col = this.newCollegue;
    this.buttonText = 'Créer';
  }

  validForm(etatForm: FormControl) {
      if (this.modeCreate) {
        console.log(JSON.stringify(this.col));
        this.dataService.creerCollegue(this.col).subscribe((data: Collegue) => {
          // console.log(data);
          this.messageOk = 'Super ! Le collègue a bien été créé';
          etatForm.reset();
        }, (error: string) => {
          this.messageErreur = `Le collègue n'a pu être créé :: ${error}`;
          console.log('error', error);
        });
        this.modeCreate = false;
      }

      if (this.modeEdit) {
        console.log(this.col);
        this.dataService.modifierCollegue(this.col.matricule, this.col).subscribe((data: Collegue) => {
          console.log(data);
          this.messageOk = 'Super ! Le collègue a bien été modifié';
        }, (error: string) => {
          this.messageErreur = `Le collègue n'a pu être modifié : ${error}`;
          console.log('error', error);
        });
        this.modeEdit = false;
      }
  }
}
