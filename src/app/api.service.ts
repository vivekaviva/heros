import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getHerosList(){
    return this.http.get('https://reqres.in/api/users?page=2');
  }


}
