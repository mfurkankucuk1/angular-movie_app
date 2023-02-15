import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'; 
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RESTAPIServiceService  {


  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any> {
    const url = environment.apiUrl
    return this.http.get<any>(url);
}
  }

   
