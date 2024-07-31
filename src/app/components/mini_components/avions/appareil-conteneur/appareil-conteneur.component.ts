import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-appareil-conteneur',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './appareil-conteneur.component.html',
  styleUrl: './appareil-conteneur.component.css'
})
export class AppareilConteneurComponent {
  passager: string = "assets/images/passagers.png";
}
