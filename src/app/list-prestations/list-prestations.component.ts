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
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.getPrestations();
    this.getCategories();
  }

   getCategories(): void {
     this.categories = this.categoriesService.getCategories();
   }

  getPrestations(): void {
    this.prestations = this.prestationsService.getPrestations();
  }

  navigateToDetails(prestation: Prestation): void {
    this.prestationsService.setSelectedPrestation(prestation);
    this.router.navigateByUrl("prestations/details");
  }

}
