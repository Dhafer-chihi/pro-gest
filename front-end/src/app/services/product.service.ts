import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private myAppUrl : string
  private myApiUrl : string
  constructor(private http : HttpClient) {
    this.myAppUrl = environment.endPoint
    this.myApiUrl = "api/products/"   
  }

  getproducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

  getProduct(product_id : number):Observable<Product>{
    return this.http.get<Product>(`${this.myAppUrl}${this.myApiUrl}${product_id}`)
  }

  deleteProduct(product_id : number):Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${product_id}`)
  }


  postProduct(product : Product , id_client : number): Observable<void>{
    return  this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}${id_client}`, product)
  }

  putProduct( product : Product , product_id : number):Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${product_id}/${product.id_client}` , product)
  }
}
