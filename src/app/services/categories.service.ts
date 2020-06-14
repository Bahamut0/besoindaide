import { Category } from './../models/category';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: Category[] = [
    new Category(
      1, "Formation professionnelle", "/assets/img/category/cours1.jpg"
    ),
    new Category(
      2, "Formation scolaire", "/assets/img/category/cours2.jpg"
    ),
    new Category(
      3, "Bricolage", "/assets/img/category/brico1.jpg"
    ),
    new Category(
      4, "Evénement", "/assets/img/category/event.jpg"
    ),
    new Category(
      5, "Assistance à personne", "/assets/img/category/granny.jpg"
    ),
    new Category(
      6, "Garde d'enfant", "/assets/img/category/baby.jpg"
    ),
    new Category(
      7, "Jardinage", "/assets/img/category/lawnmower.jpg"
    )
  ]
  selectedCategory: Category;
  constructor() {
    this.setSelectedCategory(this.categories[0]);
  }
  //Récupérer les categories
  getCategories(): Category[] {
    return this.categories;
  }
  //Modifier la category selectionnée
  setSelectedCategory(category: Category): void {
    this.selectedCategory = category;
  }
  //Récupérer la category selectionnée :
  getSelectedCategory(): Category {
    return this.selectedCategory;
  }
}
