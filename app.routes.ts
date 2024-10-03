import { Routes } from '@angular/router';
import { ProduitsComponent } from "./produits/produits.component";
import { AddProduitComponent } from "./add-produit/add-produit.component";
export const routes: Routes = [
    {path:"Produits", component:ProduitsComponent},
    {path:"add-produits", component:AddProduitComponent},
    {path:"", redirectTo:"produits", pathMatch:"full"},
];
