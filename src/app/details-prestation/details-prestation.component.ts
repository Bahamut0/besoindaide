import { PrestationsService } from './../services/prestations.service';
import { Component, OnInit } from '@angular/core';
import { Prestation } from '../models/prestation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-prestation',
  templateUrl: "./details-prestation.component.html",
  styleUrls: ["./details-prestation.component.css"]
})
export class DetailsPrestationComponent implements OnInit {

  selectedPrestation: Prestation;
  constructor(
    private router: Router,
    private prestationsService: PrestationsService
  ) { }

  ngOnInit(): void {
    this.getSelectedProduct();
  }

  getSelectedProduct(): void {
    this.selectedPrestation = this.prestationsService.getSelectedPrestation();
  }

  navigateToList(): void {
    this.router.navigateByUrl("prestations");
  }

}
