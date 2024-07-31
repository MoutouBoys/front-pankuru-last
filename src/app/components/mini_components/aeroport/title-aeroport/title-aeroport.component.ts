import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title-aeroport',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './title-aeroport.component.html',
  styleUrl: './title-aeroport.component.css'
})
export class TitleAeroportComponent {
  aeroport: string= "assets/images/aeroport 1.png"
}
