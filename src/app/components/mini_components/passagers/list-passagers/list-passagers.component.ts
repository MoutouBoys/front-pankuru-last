import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormulairePassagerComponent } from '../../../mes_formulaire/formulaire-passager/formulaire-passager.component';
import { Router, RouterLink } from '@angular/router';
import { PassagersService } from '../../../../service/passagers/passagers.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-passagers',
  standalone: true,
  imports: [NgOptimizedImage,FormulairePassagerComponent, RouterLink, NgFor, NgIf, FormsModule],
  templateUrl: './list-passagers.component.html',
  styleUrl: './list-passagers.component.css'
})
export class ListPassagersComponent implements OnInit {

  ajouterImage: string = "assets/images/Ajouter.png";

    public passagers: any;
    public showModal: boolean = false;
    public selectedPassager: any = {};
    public showDeleteModal: boolean = false;
    public passagerToDelete: any = {};

    constructor(private PassagerService: PassagersService, private router: Router, private toastr: ToastrService) {}

    ngOnInit(): void {
      this.afficher();
    }

    afficher(): void {
      this.PassagerService.getPassager().subscribe({
        next: (data) => {
          console.log(data);
          this.passagers = data;
          console.log("passagers: " + this.passagers);
        },
        error: (err) => {
          console.error("Erreur lors de la récupération des passagers: ", err);
        }
      });
    }

    ajouter(): void {
      this.router.navigate(['/formulairePassager']);
    }

    openDeleteModal(aeroport: any): void {
      this.passagerToDelete = aeroport;
      this.showDeleteModal = true;
    }

    closeDeleteModal(): void {
      this.showDeleteModal = false;
    }

    confirmDelete(): void {
      this.PassagerService.deletePassager(this.passagerToDelete.id).subscribe({
        next: (response) => {
          console.log("Passager supprimé avec succès", response);
          this.toastr.error("Passager supprimer avec succès", "Fermer");
          this.afficher(); // Mettre à jour la liste des aéroports après suppression
          this.closeDeleteModal();
        },
        error: (err) => {
          console.error("Erreur lors de la suppression du passager: ", err);
        }
      });
    }

    openModal(passager: any): void {
      this.selectedPassager = { ...passager }; // Copier l'objet personnel
      this.showModal = true;
    }

    closeModal(): void {
      this.showModal = false;
    }

    onSubmit(): void {
      this.PassagerService.updatePassager(this.selectedPassager.id, this.selectedPassager).subscribe({
        next: () => {
          this.closeModal();
          this.toastr.success("Passager modifier avec succès", "Success");
          this.afficher();
        },
        error: (err) => {
          console.error("Erreur lors de la mise à jour du passager: ", err);
        }
      });
    }
  }

