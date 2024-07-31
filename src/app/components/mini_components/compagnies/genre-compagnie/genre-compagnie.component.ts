import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-genre-compagnie',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './genre-compagnie.component.html',
  styleUrl: './genre-compagnie.component.css'
})
export class GenreCompagnieComponent {
  ajouter: string= "assets/images/Ajouter.png";

}
