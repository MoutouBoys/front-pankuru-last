import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-siege-conteneur',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './siege-conteneur.component.html',
  styleUrl: './siege-conteneur.component.css'
})
export class SiegeConteneurComponent {
  net: string = "assets/images/net.png";
  passager: string = "assets/images/passagers.png";
}
