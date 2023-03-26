import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  get _authenticated(): boolean {
    if(localStorage.getItem('username') == 'admin' || localStorage.getItem('username') == 'user'){
      return true
    }
    return false;
  }

}
