import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../interfaces/client';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private myAppUrl : string
  private myApiUrl : string
  constructor(private http : HttpClient) {
    this.myAppUrl = environment.endPoint
    this.myApiUrl = 'api/clients/'
   }


   getClients():Observable<Client[]>{
    return this.http.get<Client[]>(`${this.myAppUrl}${this.myApiUrl}`)
   }

   getClient(client_id : number):Observable<Client>{
    return this.http.get<Client>(`${this.myAppUrl}${this.myApiUrl}${client_id}`)
   }

   deletClient(client_id : number):Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${client_id}`)
   }

   addClient(client : Client):Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}` , client)
   }

   updateClient(client_id : number , client : Client):Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${client_id}` , client)
   }


   productByClient(id_client : number) : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}/client/${id_client}`)
   }
}
