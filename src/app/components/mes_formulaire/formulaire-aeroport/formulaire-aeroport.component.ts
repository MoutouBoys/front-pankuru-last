import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';
import { AeroportsService } from '../../../service/aeroports/aeroports.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulaire-aeroport',
  standalone: true,
  imports: [NavBarComponent, RechercheComponent, NgFor, FormsModule],
  templateUrl: './formulaire-aeroport.component.html',
  styleUrls: ['./formulaire-aeroport.component.css']
})
export class FormulaireAeroportComponent implements OnInit {
  ajouterImage: string = "assets/images/Ajouter.png";

  public aeroports: any;
  public nouveauAeroport: any = { nom: '', codeIATA: '', longitude: '', latitude: '', altitude: '', capaciteParking: '', nombreDePistes: '', ville: '' };

  constructor(private aeroportService: AeroportsService, private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.aeroportService.getAeroport().subscribe({
      next: (data) => {
        console.log(data);
        this.aeroports = data;
        console.log("Aéroport: " + this.aeroports);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des données de l'aéroport: ", err);
      }
    });
  }

  ajouter(): void {
    const aeroportToSend = {
      ...this.nouveauAeroport,
      ville: { id: this.nouveauAeroport.ville }
    };

    this.aeroportService.postAeroport(aeroportToSend).subscribe({
      next: (response) => {
        console.log("Aéroport ajouté avec succès", response);
        this.nouveauAeroport = { nom: '', codeIATA: '', longitude: '', latitude: '', altitude: '', capaciteParking: '', nombreDePistes: '', ville: '' }; // Réinitialiser le formulaire
        this.toastr.success("Aéroport ajouté avec succès", "Success");
        this.afficher(); // Mettre à jour la liste des aéroports après ajout
        this.router.navigate(['/aeroport']); // Rediriger vers la page de liste
      },
      error: (err) => {
        this.toastr.error("Erreur lors de l'ajout de l'aéroport", "Fermer");
        console.error("Erreur lors de l'ajout de l'aéroport: ", err);
      }
    });
  }
}
