import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title-compagnie',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './title-compagnie.component.html',
  styleUrl: './title-compagnie.component.css'
})
export class TitleCompagnieComponent {
  personnels: string = "assets/images/Personnel.png";
  maison: string = "assets/images/maison.png";
}
