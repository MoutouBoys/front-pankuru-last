import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { VolService } from '../../../../service/vols/vol.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liste-vols',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink, NgFor, NgIf, FormsModule],
  templateUrl: './liste-vols.component.html',
  styleUrl: './liste-vols.component.css'
})
export class ListeVolsComponent  implements OnInit {
  ajouterImage: string = "assets/images/Ajouter.png";

  public vols: any;
  public showModal: boolean = false;
  public selectedVol: any = {};
  public showDeleteModal: boolean = false;
  public volToDelete: any = {};


  constructor(private volservice: VolService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.volservice.getVol().subscribe({
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


  openDeleteModal(aeroport: any): void {
    this.volToDelete = aeroport;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
  }

  confirmDelete(): void {
    this.volservice.deleteVol(this.volToDelete.id).subscribe({
      next: (response) => {
        console.log("Vol supprimé avec succès", response);
        this.toastr.success("Vol modifier avec succès", "Success");
        this.afficher(); // Mettre à jour la liste des aéroports après suppression
        this.closeDeleteModal();
      },
      error: (err) => {
        console.error("Erreur lors de la suppression du vol: ", err);
      }
    });
  }


  openModal(aeroport: any): void {
    this.selectedVol = { ...aeroport }; // Copier l'objet aéroport
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    this.volservice.updateVol(this.selectedVol.id, this.selectedVol).subscribe({
      next: () => {
        this.closeModal();
        this.toastr.success("Vol modifier avec succès", "Success");
        this.afficher();
      },
      error: (err) => {
        console.error("Erreur lors de la mise à jour de la table vol: ", err);
      }
    });
  }
}
