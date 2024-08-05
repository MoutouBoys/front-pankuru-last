import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CompagnieService } from '../../../../service/compagnies/compagnie.service';
import { FormsModule } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-conteneur-right',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, NgFor, NgIf, FormsModule],
  templateUrl: './conteneur-right.component.html',
  styleUrl: './conteneur-right.component.css'
})
export class ConteneurRightComponent implements OnInit {
  ajouterImage: string = "assets/images/Ajouter.png";

  public compagnies: any;
  public showModal: boolean = false;
  public selectedCompagnie: any = {};
  public showDeleteModal: boolean = false;
  public compagnieToDelete: any = {};

  constructor(private compagnieService: CompagnieService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.compagnieService.getCompagnie().subscribe({
      next: (data) => {
        console.log(data);
        this.compagnies = data;
        console.log("compagnies: " + this.compagnies);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des compagnies: ", err);
      }
    });
  }


  openDeleteModal(aeroport: any): void {
    this.compagnieToDelete = aeroport;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
  }

  confirmDelete(): void {
    this.compagnieService.deleteCompagnie(this.compagnieToDelete.id).subscribe({
      next: (response) => {
        console.log("Compagnie supprimé avec succès", response);
        this.toastr.error("Compagnie supprimer avec succès", "Fermer");
        this.afficher(); // Mettre à jour la liste des aéroports après suppression
        this.closeDeleteModal();
      },
      error: (err) => {
        console.error("Erreur lors de la suppression de la compagnie: ", err);
      }
    });
  }


  openModal(aeroport: any): void {
    this.selectedCompagnie = { ...aeroport }; // Copier l'objet compagnie
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    this.compagnieService.updateCompagnie(this.selectedCompagnie.id, this.selectedCompagnie).subscribe({
      next: () => {
        this.closeModal();
        this.toastr.success("Compagnie modifier avec succès", "Success");
        this.afficher();
      },
      error: (err) => {
        console.error("Erreur lors de la mise à jour de la compagnie: ", err);
      }
    });
  }
}
