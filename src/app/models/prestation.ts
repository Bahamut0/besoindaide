import { Category } from './category';
import { Person } from './person';

export class Prestation {
    typeAnnonce: boolean;//proposer ou demander
    title: string;//titre de l'annonce
    description: string;
    category: Category; //par la suite elle sera enumération!
    datePublication: Date;    
    person : Person;
    constructor(
      typeAnnonce: boolean,
      title: string,
      description: string,
      category: Category,
      datePublication: Date,
      person : Person,
    ) {
      this.typeAnnonce = typeAnnonce;
      this.title = title;
      this.description = description;
      this.category = category;
      this.datePublication=datePublication;
      this.person=person;
    }
}
