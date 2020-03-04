import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
import { Collegue } from './models/Collegue';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { DataService } from './services/data.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private dataService: DataService;
  title = 'bonjour-angular';
  // unObjetCollegueFourni = collegueMock;
  unObjetCollegueFourni: Collegue = new Collegue();
}
