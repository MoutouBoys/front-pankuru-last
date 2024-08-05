import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PersonnelsService } from '../../../../service/personnels/personnels.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-personnels',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, NgFor, NgIf, FormsModule],
  templateUrl: './list-personnels.component.html',
  styleUrl: './list-personnels.component.css'
})
export class ListPersonnelsComponent implements OnInit {

  ajouterImage: string = "assets/images/Ajouter.png";

    public personnels: any;
    public showModal: boolean = false;
    public selectedPersonnel: any = {};
    public showDeleteModal: boolean = false;
    public personnelToDelete: any = {};

    constructor(private personnelsService: PersonnelsService, private router: Router, private toastr: ToastrService) {}

    ngOnInit(): void {
      this.afficher();
    }

    afficher(): void {
      this.personnelsService.getPersonnel().subscribe({
        next: (data) => {
          console.log(data);
          this.personnels = data;
          console.log("personnels: " + this.personnels);
        },
        error: (err) => {
          console.error("Erreur lors de la récupération des personnels: ", err);
        }
      });
    }

    ajouter(): void {
      this.router.navigate(['/formulairePersonnel']);
    }

    openDeleteModal(aeroport: any): void {
      this.personnelToDelete = aeroport;
      this.showDeleteModal = true;
    }

    closeDeleteModal(): void {
      this.showDeleteModal = false;
    }

    confirmDelete(): void {
      this.personnelsService.deletePersonnel(this.personnelToDelete.id).subscribe({
        next: (response) => {
          console.log("Personnel supprimé avec succès", response);
          this.toastr.error("Personnel supprimer avec succès", "Fermer");
          this.afficher(); // Mettre à jour la liste des aéroports après suppression
          this.closeDeleteModal();
        },
        error: (err) => {
          console.error("Erreur lors de la suppression du personnel: ", err);
        }
      });
    }

    openModal(personnel: any): void {
      this.selectedPersonnel = { ...personnel }; // Copier l'objet personnel
      this.showModal = true;
    }

    closeModal(): void {
      this.showModal = false;
    }

    onSubmit(): void {
      this.personnelsService.updatePersonnel(this.selectedPersonnel.id, this.selectedPersonnel).subscribe({
        next: () => {
          this.closeModal();
          this.toastr.success("Personnel modifier avec succès", "Success");
          this.afficher();
        },
        error: (err) => {
          console.error("Erreur lors de la mise à jour de l'personnel: ", err);
        }
      });
    }
  }

