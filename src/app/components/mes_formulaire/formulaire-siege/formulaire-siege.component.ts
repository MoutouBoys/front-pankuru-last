import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';
import { SiegeService } from '../../../service/sieges/siege.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulaire-siege',
  standalone: true,
  imports: [NgOptimizedImage, NavBarComponent, RechercheComponent, FormsModule],
  templateUrl: './formulaire-siege.component.html',
  styleUrl: './formulaire-siege.component.css'
})
export class FormulaireSiegeComponent   implements OnInit {
  siege: String= "assets/images/siege.jpg";

    public sieges: any;
    public sieg!:{numero:string;disponibilite:boolean;positionSiege:string}
    public nouveauSiege: any = { numero: '', disponibilite: false, positionSiege: '', passagerList: '' };

    constructor(private siegeservice: SiegeService, private router: Router, private toastr: ToastrService) {}

    ngOnInit(): void {
      this.afficher();
    }

    afficher(): void {
      this.siegeservice.getSiege().subscribe({
        next: (data) => {
          console.log(data);
          this.sieges = data;
          console.log("sieges: " + this.sieges);
        },
        error: (err) => {
          console.error("Erreur lors de la récupération des sieges: ", err);
        }
      });
    }

    ajouter(): void {
      const siegeToSend = {
        ...this.nouveauSiege,
        positionSiege: { id: this.nouveauSiege.positionSiege }
      };
      this.siegeservice.postSiege(siegeToSend).subscribe({
        next: (response) => {
          console.log("Siege ajouté avec succès", response);
          this.nouveauSiege = { numero: '', disponibilite: '', positionSiege: '', passagerList: ''  }; // Réinitialiser le formulaire
          this.toastr.success("Siege ajouté avec succès", "Success");
          this.afficher(); // Mettre à jour la liste des sieges après ajout
          this.router.navigate(["/siege"]);
        },
        error: (err) => {
          this.toastr.error("Erreur lors de l'ajout du Siege", "Fermer");
          console.error("Erreur lors de l'ajout du siege: ", err);
        }
      });
    }
  }

