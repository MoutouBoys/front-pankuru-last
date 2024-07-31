import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title-vols',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './title-vols.component.html',
  styleUrl: './title-vols.component.css'
})
export class TitleVolsComponent {
  personnels: string = "assets/images/Personnel.png";
}
