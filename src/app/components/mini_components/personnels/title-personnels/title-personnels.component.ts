import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-title-personnels',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './title-personnels.component.html',
  styleUrl: './title-personnels.component.css'
})
export class TitlePersonnelsComponent {
  personnels: string = "assets/images/Personnel.png";
}
