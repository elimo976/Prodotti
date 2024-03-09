import { Component } from '@angular/core';
import { PRODOTTI } from "../data/prodotti";
import { Prodotto } from '../models/prodotto';

@Component({
  selector: 'app-prodotti-list',
  templateUrl: './prodotti-list.component.html',
  styleUrls: ['./prodotti-list.component.css']
})
export class ProdottiListComponent {
  prodotti: Prodotto[] = PRODOTTI;
}
