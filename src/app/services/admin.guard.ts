import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

// aplicação
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  private urlGuard: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  public get url(): string {
    return this.urlGuard;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.urlGuard = state.url;

    if (this.auth.token === null || this.auth.token === undefined) {
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }
}

