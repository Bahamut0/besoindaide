import { PersonsService } from './../services/persons.service';
import { Component, OnInit } from '@angular/core';
import { Prestation } from '../models/prestation';
import { Router } from '@angular/router';
import { PrestationsService } from '../services/prestations.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-profile',
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {

  selectedPrestation: Prestation;
  selectedPerson: Person;
  constructor(
    private router: Router,
    private prestationsService: PrestationsService,
    private personsService : PersonsService
  
  ) { }

  ngOnInit(): void {
    this.getSelectedPrestation();
    this.getSelectedPerson();
  }
  getSelectedPrestation(): void {
    this.selectedPrestation = this.prestationsService.getSelectedPrestation();
  }
  getSelectedPerson(): void {
    this.selectedPerson = this.personsService.getSelectedPerson();
  }
  

  // Faire une récupération des 3 dernières prestations du user
 
  // pas besoin d'un lien vers la liste des prestations (c'est accessible depuis le menu)


}
