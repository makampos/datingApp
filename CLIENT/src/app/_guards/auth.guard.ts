import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   *
   */
  constructor(
     private accountService: AccountService,
     private toast: ToastrService) {
   
    
  }
  canActivate():Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if(user) return true;
        this.toast.error('not be permitted!')
      })
    ) 
  } 
}
