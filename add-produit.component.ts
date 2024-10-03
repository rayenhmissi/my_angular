import { Component } from '@angular/core';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [],
  templateUrl: './add-produit.component.html',
})
export class AddProduitComponent {
  produit : String[] ;
constructor() {
this.produit=["asus","iphone","samsung","lenovo"];
}
}
