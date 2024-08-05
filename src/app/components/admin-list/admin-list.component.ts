import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admins/admin.service';
import { Router, RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RechercheComponent } from '../recherche/recherche.component';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-list',
  standalone: true,
  imports: [RouterLink, NavBarComponent, RechercheComponent, NgOptimizedImage, NgFor, NgIf, FormsModule],
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.css'
})
export class AdminListComponent implements OnInit {
  ajouterImage: string = "assets/images/Ajouter.png";
  net: string = "assets/images/net.png";

  public admins: any;
  public showModal: boolean = false;
  public selectedAdmin: any = {};
  public showDeleteModal: boolean = false;
  public adminToDelete: any = {};

  constructor(private adminservice: AdminService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.adminservice.getAdmin().subscribe({
      next: (data) => {
        console.log(data);
        this.admins = data;
        console.log("admins: " + this.admins);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des admin: ", err);
      }
    });
  }

  openDeleteModal(aeroport: any): void {
    this.adminToDelete = aeroport;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
  }

  confirmDelete(): void {
    this.adminservice.deleteAdmin(this.adminToDelete.id).subscribe({
      next: (response) => {
        console.log("Admin supprimé avec succès", response);
        this.toastr.success("Admin supprimer avec succès", "Fermer");
        this.afficher(); // Mettre à jour la liste des aéroports après suppression
        this.closeDeleteModal();
      },
      error: (err) => {
        console.error("Erreur lors de la suppression de l'admin: ", err);
      }
    });
  }


  openModal(admin: any): void {
    this.selectedAdmin = { ...admin }; // Copier l'objet admin
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    this.adminservice.updateAdmin(this.selectedAdmin.id, this.selectedAdmin).subscribe({
      next: () => {
        this.closeModal();
        this.toastr.success("Admin modifier avec succès", "Success");
        this.afficher();
      },
      error: (err) => {
        console.error("Erreur lors de la mise à jour de l'admin: ", err);
      }
    });
  }

    ngAfterViewInit(): void {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('spin-in-visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const elementsToAnimate = document.querySelectorAll('.spin-in');
      elementsToAnimate.forEach(element => {
        observer.observe(element);
      });
    }
  }
