import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';
import { CompagnieService } from '../../../service/compagnies/compagnie.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajout-compagnie',
  standalone: true,
  imports: [NgOptimizedImage, NavBarComponent, RechercheComponent, NgFor, NgIf, FormsModule],
  templateUrl: './ajout-compagnie.component.html',
  styleUrls: ['./ajout-compagnie.component.css']
})
export class AjoutCompagnieComponent implements OnInit {
  faq: string = "assets/images/faq.svg";
  faq_icon: string = "assets/images/faq 1.png";
  mask: string = "assets/images/Mask.png";
  maison: string = "assets/images/maison.png";

  public compagnie: any[] = [];
  public nouveauCompagnie: any = { nom: '', codeIATA: '', logoUrl: '', email: '', siteWeb: '', numeroLicence: '', numeroTelephone: '', codeICAO: '', matricule: '' };

  constructor(private compagnieService: CompagnieService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.compagnieService.getCompagnie().subscribe({
      next: (data) => {
        this.compagnie = data;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des compagnies: ", err);
      }
    });
  }

  ajouter(): void {
    this.compagnieService.postCompagnie(this.nouveauCompagnie).subscribe({
      next: (response) => {
        this.nouveauCompagnie = { nom: '', codeIATA: '', logoUrl: '', email: '', siteWeb: '', numeroLicence: '', numeroTelephone: '', codeICAO: '', matricule: '' };
        this.afficher();
        this.router.navigate(["/compagnie"]);
        this.toastr.success("Compagnie ajoutée avec succès", "Success");
      },
      error: (err) => {
        console.error("Erreur lors de l'ajout de la compagnie: ", err);
        this.toastr.error("Erreur lors de l'ajout de la compagnie", "Fermer");
      }
    });
  }
}
