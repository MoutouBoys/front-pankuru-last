import { Injectable, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {AuthServiceService} from "../auth_service/auth-service.service";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class InactivityService {
  private timeoutId: any;
  private readonly inactivityTime: number =  5 * 60 * 1000; //

  constructor(
    private authService: AuthServiceService,
    private ngZone: NgZone,
    private toast: ToastrService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.startInactivityTimer();
      this.setupEventListeners();
    }
  }

  private startInactivityTimer() {
    this.ngZone.runOutsideAngular(() => {
      this.clearTimeout();
      this.timeoutId = setTimeout(() => this.handleInactivity(), this.inactivityTime);
    });
  }

  private setupEventListeners() {
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('mousemove', () => this.resetInactivityTimer());
      document.addEventListener('keydown', () => this.resetInactivityTimer());
      document.addEventListener('click', () => this.resetInactivityTimer());
    }
  }

  private resetInactivityTimer() {
    this.startInactivityTimer();
  }

  private clearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private handleInactivity() {
    this.authService.logout();
    alert('Vous avez été déconnecté en raison d\'une inactivité.');
  }
}
