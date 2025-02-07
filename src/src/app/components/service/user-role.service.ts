import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import moment from 'moment';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class dbUserRoleService {
  constructor(private http: HttpClient) {}

  private getHttpOptions() {
    const token = localStorage.getItem('JwtToken') || '';
    console.log('Token:', token); // ✅ Check if token is retrieved correctly
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }),
    };
  }

  private getToken(): string {
    const token = localStorage.getItem('JwtToken');
    // console.log('Token:', token);
    return token || '';
  }

  async GetRoleList(obj: any) {
    Date.prototype.toISOString = function () {
      return moment(this).format('YYYY-MM-DD');
    };
    var body = JSON.stringify(obj);
    return await this.http
      .post(
        environment.apibaseUrl + 'role/GetRole',
        body,
        this.getHttpOptions()
      )
      .toPromise()
      .then(
        (res) => {
          return res;
        },
        (msg) => {
          return null;
        }
      );
  }
}
