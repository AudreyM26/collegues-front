import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-details-collegue',
  templateUrl: './details-collegue.component.html',
  styleUrls: ['./details-collegue.component.css']
})
export class DetailsCollegueComponent implements OnInit {

  collegueDetails: Collegue = new Collegue();
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const matricule = params.get('matricule');

      this.dataService.rechercherParMatricule(matricule).subscribe((value) => {
        this.collegueDetails = value;
        // console.log(this.collegueDetails);
        });
    });
  }

}
