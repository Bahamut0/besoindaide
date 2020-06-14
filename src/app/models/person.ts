import { Prestation } from './prestation';

export class Person {
    id: number;
    name: string;
    firstname: string;
    age: number;
    email: string;
    password: string;
    address: string;//future classe
    urlPhoto: string;
    descriptionProfil: string;
    telephone: string;
    mesPassions: string;
    dateRegistration: Date;

    constructor(
        id: number,
        name: string,
        firstname: string,
        age: number,
        email: string,
        password: string,
        address: string,
        urlPhoto: string,
        descriptionProfil: string,
        telephone: string,
        mesPassions: string,
        dateRegistration: Date
    ) {
        this.id = id;
        this.name = name;
        this.firstname = firstname;
        this.age = age;
        this.email = email;
        this.password = password;
        this.address = address;
        this.urlPhoto = urlPhoto;
        this.descriptionProfil = descriptionProfil;
        this.telephone = telephone;
        this.mesPassions = mesPassions;
        this.dateRegistration = dateRegistration;
    }

}
