import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reservations-vols',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './reservations-vols.component.html',
  styleUrl: './reservations-vols.component.css'
})
export class ReservationsVolsComponent {
  net: string = "assets/images/net.png";
}
