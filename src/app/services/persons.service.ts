import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  
  persons: Person[] = [
    new Person(
      1, "Mariem", "Abichou", 19, "mariemestgenial@gmail.com", "password123", "1 rue de la joie, 75001, Paris, France", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample10.jpg",
      "De nature optimiste, joviale, j\'ai toujours eu le sens du social. Aujourd\'hui je souhaite prendre du temps pour aider les autres de façon bénévole.", "0678964515",
      "Faire des ballades avec mes enfants, le tricot, les romans policiers",
      new Date("01/11/2018")
    ),
    new Person(
      2, "Atep", "Zock", 21, "zocklafripouille@gmail.com", "gta4ever", "18 rue du sourire, 78200, Mantes la jolie, France", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample7.jpg",
      "Incroyable mais vrai, je vous offre mes services de développeuse pour le site votre choix.", "0678964515", "Faire des ballades avec mes enfants, le tricot, les romans policiers",
      new Date("01/11/2017")
    ),
    new Person(
      3, "Marine", "Garguy", 32, "patateinfire@gmail.com", "frites", "39 avenue de la bière, 93600, Aulnay, France", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg",
      "J'aime la pizza et la bière.", "0678964515", "Faire des ballades avec mes enfants, le tricot, les romans policiers",
      new Date("01/11/2014")
    ),
    new Person(
      4, "Leo", "Intello", 19, "mariemestgenial@gmail.com", "password123", "1 rue de la joie, 75001, Paris, France", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample13.jpg",
      "De nature optimiste, joviale", "0678964515", "Faire des ballades avec mes enfants, le tricot, les romans policiers",
      new Date("01/11/2016")
    ),
    new Person(
      5, "Maurice", "Ateli", 21, "Ali@gmail.com", "gta4ever", "18 rue du sourire, 78200, Mantes la jolie, France", "/assets/img/users/men_3.jpg",
      "De nature optimiste, joviale", "0678964515", "Faire des ballades avec mes enfants, le tricot, les romans policiers",
      new Date("01/11/2018")
    ),
    new Person(
      6, "Cyril", "Potter", 32, "Cyril@gmail.com", "frites", "39 avenue de la bière, 93600, Aulnay, France", "/assets/img/users/men_4.jpg",
      "de nature optimiste, joviale", "0678964515", "Faire des ballades avec mes enfants, le tricot, les romans policiers",
      new Date("01/11/2015")
    ),
  ]
  selectedPerson: Person;
  constructor() {
    this.setSelectedPerson(this.persons[0]);
  }
  //Récupérer les personnes
  getPersons(): Person[] {
    return this.persons;
  }
  //Modifier la personne selectionnée
  setSelectedPerson(person: Person): void {
    this.selectedPerson = person;
  }
  //Récupérer la personne selectionnée
  getSelectedPerson(): Person {
    return this.selectedPerson;
  }

  //Récupérer les personnes de l'inscription la plus récente à la plus ancienne (à limiter ensuite à 6 avec un pipe côté html)
  getPersonsSortedByDate(): Person[] {
    return this.persons.slice().sort((a, b) => b.dateRegistration.getTime() - a.dateRegistration.getTime());
  }

}
