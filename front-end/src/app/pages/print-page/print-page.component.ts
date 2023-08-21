import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/interfaces/client';
import { Product } from 'src/app/interfaces/product';
import { ClientService } from 'src/app/services/client.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-print-page',
  templateUrl: './print-page.component.html',
  styleUrls: ['./print-page.component.css']
})
export class PrintPageComponent implements OnInit{

  client !: Client
  product !: Product

  id_client : number
  product_id : number

  constructor(private clientService : ClientService, private productService : ProductService ,private aRouter : ActivatedRoute){
    this.id_client  = Number(aRouter.snapshot.paramMap.get('id_client'))
    this.product_id  = Number(aRouter.snapshot.paramMap.get('product_id'))

    console.log(this.id_client)
    console.log(this.product_id)

  }

  ngOnInit(): void {
    this.getClient(this.id_client)
    this.getProduct(this.product_id)
  }


 getClient(id_client : number){
  this.clientService.getClient(id_client).subscribe((data)=>{
    this.client = data
  })
 }
  

  getProduct(product_id : number){
    this.productService.getProduct(product_id).subscribe((data)=>{
      this.product = data
    })
  }


 print(){
  window.print()
 }

}
