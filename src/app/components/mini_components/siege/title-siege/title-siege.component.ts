import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title-siege',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './title-siege.component.html',
  styleUrl: './title-siege.component.css'
})
export class TitleSiegeComponent {
  passagers: string = "assets/images/passagers.png";
  passagers1: string = "assets/images/passagers 1.png";
}
