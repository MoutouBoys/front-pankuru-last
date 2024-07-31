import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title-avion',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './title-avion.component.html',
  styleUrl: './title-avion.component.css'
})
export class TitleAvionComponent {
  passagers: string = "assets/images/passagers.png";
  avions: string = "assets/images/Avions.png";
}
