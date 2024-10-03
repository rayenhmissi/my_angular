import { Component } from '@angular/core';
@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [],
  templateUrl: './produits.component.html',
})
export class ProduitsComponent {
  produit : String[] ;
constructor() {
this.produit=["asus","iphone","samsung","lenovo"];
}
}