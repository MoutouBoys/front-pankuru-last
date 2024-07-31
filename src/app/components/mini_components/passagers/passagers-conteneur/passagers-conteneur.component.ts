import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-passagers-conteneur',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './passagers-conteneur.component.html',
  styleUrl: './passagers-conteneur.component.css'
})
export class PassagersConteneurComponent {
  net: string = "assets/images/net.png";
  passager: string = "assets/images/passagers.png";
}
