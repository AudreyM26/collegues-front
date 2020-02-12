import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { ColleguePhoto } from '../models/ColleguePhoto';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  listeMatriculesPhotos: Observable<ColleguePhoto[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.listeMatriculesPhotos = this.dataService.listerPhotosCollegues();
  }
}
