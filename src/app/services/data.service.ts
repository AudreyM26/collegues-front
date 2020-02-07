import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Collegue } from '../models/Collegue';
import {tap, map} from 'rxjs/operators';
import { environment } from '../../environments/environment';
// en développement, URL_BACKEND = 'http://localhost:4200'
// en mode production, URL_BACKEND = 'http://audrey-collegues-api.herokuapp.com/collegues'
import { HttpHeaders } from '@angular/common/http';
const urlCollegues = environment.backendUrl;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // création du bus d'événement
  subjectDetailsCollegue = new Subject<Collegue>();

  constructor(private httpClient: HttpClient) { }


  rechercherParNom(nom: string): Observable<string[]> {
    const urlParams = '?nom=' + nom.toUpperCase();

    return this.httpClient.get<string[]>(urlCollegues + urlParams);
  }

  rechercherParMatricule(matricule: string): Observable<Collegue> {

    return this.httpClient.get<Collegue>(urlCollegues + '/' + matricule)
    .pipe(
      tap(collegueDetail => {
        this.subjectDetailsCollegue.next(collegueDetail);
      })
    );
  }

  creerCollegue(collegueRecu: Collegue): Observable<Collegue> {
    return this.httpClient.post<Collegue>(urlCollegues, JSON.stringify(collegueRecu) , httpOptions);
  }

  modifierCollegue(matricule: string, collegueModif: Collegue): Observable<Collegue> {
    console.log('data service ' + collegueModif.email + ' ' + matricule);
    return this.httpClient.patch<Collegue>(`${urlCollegues}/${matricule}`, JSON.stringify(collegueModif) , httpOptions);
  }

  existCollegue(email: string): Observable<boolean> {
    return this.httpClient.get<boolean>(`${urlCollegues}?email=${email}`);
  }

}
