import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-personnels',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './categories-personnels.component.html',
  styleUrl: './categories-personnels.component.css'
})
export class CategoriesPersonnelsComponent {
personnel: String= "assets/images/Personnel.png"
}
