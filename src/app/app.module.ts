import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { FormsModule } from '@angular/forms';
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AproposComponent } from './apropos/apropos.component';
import { DetailsCollegueComponent } from './details-collegue/details-collegue.component';

const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'gallerie', component: GallerieComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'detailsCollegue/:matricule', component: DetailsCollegueComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    UrlValidatorDirective,
    EmailValidatorDirective,
    MenuComponent,
    AccueilComponent,
    GallerieComponent,
    AproposComponent,
    DetailsCollegueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
