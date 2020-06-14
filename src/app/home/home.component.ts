import { PersonsService } from './../services/persons.service';
import { Person } from './../models/person';
import { Component, OnInit } from '@angular/core';
import { Prestation } from '../models/prestation';
import { PrestationsService } from '../services/prestations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"], 
})
export class HomeComponent implements OnInit {
  title = 'besoindaide';
  sortedPrestations: Prestation[];
  sortedPersons: Person[];

  constructor(private router: Router,private prestationsService: PrestationsService, private personsService: PersonsService) { }

  ngOnInit(): void {
    //récupérer les tableaux des 6 personnes et 6 prestations à l'arrivée de la page
    this.getlast6Prestations();
    this.getlast6Persons();
  }
  getlast6Prestations(): void {
     //à limiter ensuite à 6 avec un pipe côté html)
    this.sortedPrestations = this.prestationsService.getPrestationsSortedByDate();
  }
  getlast6Persons(): void {
    //à limiter ensuite à 6 avec un pipe côté html)
    this.sortedPersons = this.personsService.getPersonsSortedByDate();
  }

  navigateToDetails(prestation: Prestation): void {
    this.prestationsService.setSelectedPrestation(prestation);
    this.router.navigateByUrl("prestations/details");
  }
 
  navigateToProfile(person: Person): void {
    this.personsService.setSelectedPerson(person);
    this.router.navigateByUrl("profile");
  }

}
