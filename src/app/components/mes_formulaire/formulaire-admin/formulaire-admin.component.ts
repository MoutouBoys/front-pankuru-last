import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../service/admins/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-admin',
  standalone: true,
  imports: [NavBarComponent, RechercheComponent, NgFor, NgIf, FormsModule],
  templateUrl: './formulaire-admin.component.html',
  styleUrl: './formulaire-admin.component.css'
})
export class FormulaireAdminComponent implements OnInit {
  
  public admins: any;
  public nouveauAdmin: any = { nom: '', prenom: '', email: '', password: '', numeroDeTelephone:'', pseudo: ''};

  constructor(private adminservice: AdminService, private router: Router) {}

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
        console.error("Erreur lors de la récupération des admins: ", err);
      }
    });
  }

  ajouter(): void {
    this.adminservice.postAdmin(this.nouveauAdmin).subscribe({
      next: (response) => {
        console.log("Admin ajouté avec succès", response);
        this.nouveauAdmin = { nom: '', prenom: '', email: '', password: '', numeroDeTelephone:'', pseudo: ''}; // Réinitialiser le formulaire
        this.afficher(); // Mettre à jour la liste des admins après ajout
      },
      error: (err) => {
        console.error("Erreur lors de l'ajout de l'admin: ", err);
      }
    });
  }
}