import { Component } from '@angular/core';
import { produit } from '../model/produit.model';
@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [],
  templateUrl: './produits.component.html',
})
export class ProduitsComponent {
  produit : produit [];
constructor() {
  this.produit=[
    {idProduit:10,nomProduit:"pc lenovo",prixProduit:1500,dateCreation:new Date ("05/20/2024")},
    {idProduit:11,nomProduit:"iphone",prixProduit:1800,dateCreation:new Date ("09/10/2021")},
    {idProduit:12,nomProduit:"clavier",prixProduit:150,dateCreation:new Date ("04/24/2024")},
  ]
}
}