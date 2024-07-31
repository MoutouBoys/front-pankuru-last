import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { AvionService } from '../../../../service/avions/avion.service';

@Component({
  selector: 'app-list-avion',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, NgFor, NgIf, FormsModule], // Ajouter FormsModule aux imports
  templateUrl: './list-avion.component.html',
  styleUrls: ['./list-avion.component.css']
})
export class ListAvionComponent implements OnInit {
  ajouterImage: string = "assets/images/Ajouter.png";
  
  public avions: any;
  public showModal: boolean = false;
  public selectedAvion: any = {};

  constructor(private avionService: AvionService, private router: Router) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.avionService.getAvion().subscribe({
      next: (data) => {
        console.log(data);
        this.avions = data;
        console.log("avions: " + this.avions);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des avions: ", err);
      }
    });
  }

  ajouter(): void {
    this.router.navigate(['/formulaireAvion']);
  }

  supprimer(id: number): void {
    this.avionService.deleteAvion(id).subscribe({
      next: (response) => {
        console.log("Avion supprimé avec succès", response);
        this.afficher(); // Mettre à jour la liste des avions après suppression
      },
      error: (err) => {
        console.error("Erreur lors de la suppression de l'avion: ", err);
      }
    });
  }

  openModal(avion: any): void {
    this.selectedAvion = { ...avion }; // Copier l'objet avion
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    this.avionService.updateAvion(this.selectedAvion.id, this.selectedAvion).subscribe({
      next: () => {
        this.closeModal();
        this.afficher();
      },
      error: (err) => {
        console.error("Erreur lors de la mise à jour de l'avion: ", err);
      }
    });
  }
}
