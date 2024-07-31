import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title-parametre',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './title-parametre.component.html',
  styleUrl: './title-parametre.component.css'
})
export class TitleParametreComponent {
  personnels: string = "assets/images/Personnel.png";
  parametre: string = "assets/images/Settings.png";
}
