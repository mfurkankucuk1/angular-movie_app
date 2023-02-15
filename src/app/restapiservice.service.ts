import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class RESTAPIServiceService  {


  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any> {
    const url = 'https://fakestoreapi.com/products';
    return this.http.get<any>(url);
}
  }

   
