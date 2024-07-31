import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire-reponses-faq',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './formulaire-reponses-faq.component.html',
  styleUrl: './formulaire-reponses-faq.component.css'
})
export class FormulaireReponsesFaqComponent {
  faq: string= "assets/images/faq.svg";
  faq_icon: string= "assets/images/faq 1.png";
}
