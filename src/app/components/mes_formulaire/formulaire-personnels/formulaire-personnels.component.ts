import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';
import { PersonnelsService } from '../../../service/personnels/personnels.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from '../../../service/auth_interceptor/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulaire-personnels',
  standalone: true,
  imports: [NavBarComponent, RechercheComponent, NgFor, NgIf, FormsModule],
  templateUrl: './formulaire-personnels.component.html',
  styleUrl: './formulaire-personnels.component.css',
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class FormulairePersonnelsComponent implements OnInit {

  public personnels: any;
  public nouveauPersonnel: any = { nom: '', prenom: '', email: '', passwprd: '', numeroDeTelephone:'', poste: '', role:''};

  constructor(private personnelservice: PersonnelsService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.personnelservice.getPersonnel().subscribe({
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
    const personnelToSend = {
      ...this.nouveauPersonnel,
      role: { id: this.nouveauPersonnel.role }
    };
    this.personnelservice.postPersonnel(personnelToSend).subscribe({
      next: (response) => {
        console.log("Personnel ajouté avec succès", response);
        this.nouveauPersonnel = { nom: '', prenom: '', email: '', passwprd: '', numeroDeTelephone:'', poste: '', role:''}; // Réinitialiser le formulaire
        this.toastr.success("Personnel ajouté avec succès", "Success");
        this.afficher(); // Mettre à jour la liste des personnels après ajout
        this.router.navigate(["/personnel"]);
      },
      error: (err) => {
        this.toastr.error("Erreur lors de l'ajout du personnel", "Fermer");
        console.error("Erreur lors de l'ajout du Personnel: ", err);
      }
    });
  }
}
