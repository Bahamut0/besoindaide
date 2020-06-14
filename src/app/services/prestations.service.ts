import { Category } from './../models/category';
import { CategoriesService } from './categories.service';
import { Injectable, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Prestation } from '../models/prestation';
import { PersonsService } from './persons.service';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  
  prestations: Prestation[] = [
    new Prestation(//0 : offer - 1 : requester
      0, "Garde d'enfant", "Je suis disponible à partir de 17h pour de la garde d'enfant de 6 à 8 ans", this.categoriesService.categories[5],
      new Date("01/01/2020"), this.personsService.persons[0], 
    ),
    new Prestation(//0 : offer - 1 : requester
      0, "Travaux de plomberie", "Une fuite ? Un mauvais raccordement ? Je suis là pour vous aider !", this.categoriesService.categories[2],
      new Date("04/06/2020"), this.personsService.persons[1]
    ),
    new Prestation(//0 : offer - 1 : requester
      1, "Fuite d'eau ", "Je recherche quelqu'un pour m'aider réparer une fuite d'eau venant de ma salle de bain", this.categoriesService.categories[2],
      new Date("09/05/2019"), this.personsService.persons[2]
    ),
    new Prestation(//0 : offer - 1 : requester
      1, "Jardinage", "Je recherche quelqu'un pour m'aider à tendre mon jardin et à couper des branches d'arbre", this.categoriesService.categories[6],
      new Date("06/06/2020"), this.personsService.persons[3]
    ),
    new Prestation(//0 : offer - 1 : requester
      1, "Cours de philosophie", "Je recherche quelqu'un pour m'aider à m'améliorer en philosophie. Je suis en terminale Littéraire", this.categoriesService.categories[1],
      new Date("06/14/2020"), this.personsService.persons[5]
    ),
    new Prestation(//0 : offer - 1 : requester
      0, "Formation Adulte Java", "Je suis disponible pour donner des cours de java pour élèves débutants", this.categoriesService.categories[7],
      new Date("02/12/2018"), this.personsService.persons[3]
    ),
    new Prestation(//0 : offer - 1 : requester
      0, "Cours de Math", "Je suis disponible pour donner des cours de mathématique de niveau lycée et pour tout types de filières", this.categoriesService.categories[1],
      new Date("02/12/2019"), this.personsService.persons[0]
    ),
    new Prestation(//0 : offer - 1 : requester
      0, "Cours HTML-CSS", "Je souhaiterai apprendre à créer des applications mobiles. Je cherche quelqu'un qui pourrait m'aider", this.categoriesService.categories[7],
      new Date("06/13/2020"), this.personsService.persons[3]
    ),
  ];
  
  selectedPrestation: Prestation;
  constructor(
    private personsService: PersonsService,
    private categoriesService: CategoriesService,
    
  ) {
    //this.setSelectedPrestation(this.prestations[0]);
    
  
  }

  //Récupérer la prestation selectionnéé
  getPrestations(): Prestation[] {
    return this.prestations;
  }
  //Modifier la prestation selectionnée
  setSelectedPrestation(prestation: Prestation): void {
    this.selectedPrestation = prestation;
  }

  //Récupérer la prestation selectionnée :
  getSelectedPrestation(): Prestation {
    return this.selectedPrestation;
  }

  //Récupérer les prestations de la plus récente à la plus ancienne (à limiter ensuite à 6 avec un pipe côté html)
  getPrestationsSortedByDate(): Prestation[] {
    return this.prestations.slice().sort((a, b) => b.datePublication.getTime() - a.datePublication.getTime());
  }

}
