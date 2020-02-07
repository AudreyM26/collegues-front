import {Collegue} from '../models/Collegue';

const collegueMock = new Collegue();

collegueMock.matricule = 'M00';
collegueMock.nom = 'TestNom';
collegueMock.prenoms = 'Test';
collegueMock.email = 'test.testnom@societe.com';
collegueMock.dateDeNaissance = new Date(1976, 6, 10);
collegueMock.photoUrl = 'https://previews.123rf.com/images/kritchanut/kritchanut1405/kritchanut140500053/28162597-homme-ic%C3%B4ne-silhouette-portrait.jpg';

export { collegueMock };
