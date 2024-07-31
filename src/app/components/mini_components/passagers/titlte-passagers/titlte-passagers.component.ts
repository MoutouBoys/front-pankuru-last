import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-titlte-passagers',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './titlte-passagers.component.html',
  styleUrl: './titlte-passagers.component.css'
})
export class TitltePassagersComponent {
  passagers: string = "assets/images/passagers.png";
  passagers1: string = "assets/images/passagers 1.png";
}
