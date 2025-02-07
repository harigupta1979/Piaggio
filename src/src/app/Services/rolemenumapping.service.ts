import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class dbRoleMenuMappingService {
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

  async PostService(obj: any) {
    Date.prototype.toJSON = function () {
      return moment(this).format('YYYY-MM-DD');
    };
    var body = JSON.stringify(obj);
    return await this.http
      .post(
        environment.apibaseUrl + 'Role/PostRole',
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
  async GetService(obj: any) {
    Date.prototype.toJSON = function () {
      return moment(this).format('YYYY-MM-DD');
    };
    var body = JSON.stringify(obj);
    return await this.http
      .post(
        environment.apibaseUrl + 'Role/GetRole',
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
  async GetRoleMenu(obj: any) {
    debugger;
    Date.prototype.toJSON = function () {
      return moment(this).format('YYYY-MM-DD');
    };
    var body = JSON.stringify(obj);
    return await this.http
      .post(
        environment.apibaseUrl + 'Role/GetRoleMenu',
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
