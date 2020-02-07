export class Collegue {

  private _matricule: string;
  private _nom: string;
  private _prenoms: string;
  private _email: string;
  private _dateDeNaissance: Date;
  private _photoUrl: string;

  constructor() { }

  get photoUrl(): string {
    return this._photoUrl;
  }
  set photoUrl(photo: string) {
    this._photoUrl = photo;
  }

  get dateDeNaissance(): Date {
    return this._dateDeNaissance;
  }

  set dateDeNaissance(date: Date) {
    this._dateDeNaissance = date;
  }

  get email(): string {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }

  get matricule(): string {
    return this._matricule;
  }
  set matricule(matricule: string) {
    this._matricule = matricule;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(nom: string) {
    this._nom = nom;
  }

  get prenoms(): string {
    return this._prenoms;
  }
  set prenoms(prenoms: string) {
    this._prenoms = prenoms;
  }

  toString() {
    return `${this.nom.toUpperCase()} ${this.prenoms}`;
  }
}
