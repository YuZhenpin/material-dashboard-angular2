import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
        console.log("canActivate??????????")
     }
    canActivate() {
        console.log("please login.");
        const logInStatus = localStorage.getItem('access_token');
        console.log(logInStatus);
        if (logInStatus) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
