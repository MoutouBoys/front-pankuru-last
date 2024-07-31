import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../../service/auth_service/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-page-connexion',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule, FormsModule, NgFor, NgIf],
  templateUrl: './page-connexion.component.html',
  styleUrl: './page-connexion.component.css',
})
export class PageConnexionComponent implements OnInit{

  /* credentials =
     { };*/
  username: String = '';
  password: String = '';
  isConnected: boolean = false;

  ngOnInit(): void {
    this.isConnected = !localStorage.getItem('currentUser');
  }

  message = '';

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private toastr: ToastrService,
  ){}

  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      localStorage.setItem("currentUser", JSON.stringify(response));
      this.router.navigate(['/accueil']);
      this.toastr.success("Connection reussi avec succéss", "Success")
      this.username = '';
      this.password = '' ;

    }, error => {
      this.toastr.error("Username ou MotDePasse incorrect")

      this.message = 'Invalid username or password';
      this.username = '';
      this.password = '' ;
    });
  }


  logo1: string = "assets/images/logoToolbar.png";
  person: string ="assets/images/person.png";
  eyes: string ="assets/images/eye.png";
}
