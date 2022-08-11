import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  refreshToken() {
    return this.http.post<any>(
      `${environment.apiUrl}/authent/token/refresh`,
      {
        refresh: this.getRefreshToken(),
      },
      {
        headers: {
          skip: 'true',
        },
      }
    );
  }

  isLoggedIn() {
    let token = this.getJwtToken();
    if (token == 'undefined' || token == null) {
      return false;
    }
    return true;
  }

  getJwtToken() {
    let token = localStorage.getItem('access');
    if (token) return token;
    else return null;
  }

  getRefreshToken() {
    let token = localStorage.getItem('refresh');
    if (token) {
      return token;
    }
    return null;
  }
}
