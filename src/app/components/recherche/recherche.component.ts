import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {BehaviorSubject, Observable} from "rxjs";
import { AuthServiceService } from '../../service/auth_service/auth-service.service';

@Component({
  selector: 'app-recherche',
  standalone: true,
  imports: [NgOptimizedImage, RouterOutlet, RouterLink],
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.css'
})
export class RechercheComponent {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private authService: AuthServiceService, private router: Router) {
    const storedUser = this.isBrowser() ? localStorage.getItem('currentUser') : null;
    this.currentUserSubject = new BehaviorSubject<any>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;

  }

  getUsername(): string | null {
    let user = this.currentUserSubject.value;
    return user ? user.Nom + ' ' + user.Prenom : null;
  }
  getRole(): string {
    let user = this.currentUserSubject.value;
    return user && user.role && Array.isArray(user.role) ? user.role[0] : '';
  }
  passagers: string = "assets/images/Profil.png";
}
