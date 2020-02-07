import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of as observableOf } from 'rxjs';
import { DataService } from '../services/data.service';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements AsyncValidator {

  constructor(private dataService: DataService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    // TODO implémenter la validation

    console.log(`existerr : ${this.dataService.existCollegue(control.value)}   ${control.value}`);

   /* this.dataService.existCollegue(control.value).map(resp => {
      console.log(resp);
    });*/
/*
    if (!this.dataService.existCollegue(control.value)) {
      return null;


    } else {
      console.log(`exist : ${this.dataService.existCollegue(control.value)}`);
      return observableOf( {existEmail : true});
      // return { existCollegue : this.dataService.existCollegue(control.value) };
    }*/
    return null;

  }
}
