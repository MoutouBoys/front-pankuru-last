import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';
import { VolService } from '../../../service/vols/vol.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulaire-vols',
  standalone: true,
  imports: [NavBarComponent, RechercheComponent, NgFor, NgIf, FormsModule],
  templateUrl: './formulaire-vols.component.html',
  styleUrl: './formulaire-vols.component.css'
})
export class FormulaireVolsComponent implements OnInit {
  ajouterImage: string = "assets/images/Ajouter.png";

  public vols: any;
  public nouveauvol: any = { numeroDeVol: '', aeroportDepart: '', aeroportDArrivee: '', dateEtHeureArrivee: '', dateEtHeureDepart: '', satut: ''};

  constructor(private volService: VolService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.volService.getVol().subscribe({
      next: (data) => {
        console.log(data);
        this.vols = data;
        console.log("vols: " + this.vols);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des vols: ", err);
      }
    });
  }

  ajouter(): void {
    this.volService.postVol(this.nouveauvol).subscribe({
      next: (response) => {
        console.log("vol ajouté avec succès", response);
        this.nouveauvol = { numeroDeVol: '', aeroportDepart: '', aeroportDArrivee: '', dateEtHeureArrivee: '', dateEtHeureDepart: '', satut: ''}; // Réinitialiser le formulaire
        this.toastr.success("Vol ajouté avec succès", "Success");
        this.afficher(); // Mettre à jour la liste des avions après ajout
        this.router.navigate(["/vol"]);
      },
      error: (err) => {
        this.toastr.error("Erreur lors de l'ajout du vol", "Fermer");
        console.error("Erreur lors de l'ajout du vol: ", err);
      }
    });
  }
}
