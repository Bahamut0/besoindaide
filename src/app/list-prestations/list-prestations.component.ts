import { PersonsService } from './../services/persons.service';
import { Person } from './../models/person';
import { Prestation } from './../models/prestation';
import { Category } from './../models/category';
import { PrestationsService } from './../services/prestations.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-list-prestations',
  templateUrl: "./list-prestations.component.html",
  styleUrls: ["./list-prestations.component.css"]
})
export class ListPrestationsComponent implements OnInit {

  prestations: Prestation[];
  categories: Category[];
  sortedPrestations: Prestation[];
  constructor(
    private router: Router,
    private prestationsService: PrestationsService,
    private personsService: PersonsService,
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.getPrestations();
    this.getCategories();
    
    
  }

  getCategories(): void {
     this.categories = this.categoriesService.getCategories();
   }

  getPrestations(): Prestation [] {
    this.prestations = this.prestationsService.getPrestations();
    return this.prestations;
  }

  navigateToDetails(prestation: Prestation): void {
    this.prestationsService.setSelectedPrestation(prestation);
    this.router.navigateByUrl("prestations/details");
  }

 //il n'y a pas de chemin vers les différents users mais vers un une prestation
  navigateToProfile(person: Person): void {
    this.personsService.setSelectedPerson(person);
    this.router.navigateByUrl("profile");
  }

  //filtre

  getPrestationsByTypeAnnonce(filtre: string): void {
    switch (filtre) {
      case 'offre':
        this.sortedPrestations = this.prestations.filter(pres => pres.typeAnnonce == 0);
        break;
      case 'demande':
        this.sortedPrestations = this.prestations.filter(pres => pres.typeAnnonce == 1);
        break;

      default:
        this.sortedPrestations = this.getPrestations();
        break;
    }
  }
  getPrestationsByDate(nbrJour: number): void {

    this.sortedPrestations = this.prestations.filter(
      pres => (Math.ceil((Math.abs(new Date().getTime() - pres.datePublication.getTime())) / (1000 * 3600 * 24))) <= nbrJour);
  }

  getPrestationsByCategory(categoryLabel: string): void {
    this.sortedPrestations = this.prestations.filter(pres => pres.category.label == categoryLabel);
  }

}
