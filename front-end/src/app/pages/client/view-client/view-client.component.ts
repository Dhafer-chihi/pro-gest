import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/interfaces/client';
import { Product } from 'src/app/interfaces/product';
import { ClientService } from 'src/app/services/client.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {

  
  
  client_id : number
  product_id !: number


  client !: Client 
  product !: Product

   

  productList : Product[] = []

  constructor(private fb : FormBuilder , private aRoute : ActivatedRoute , private clientService : ClientService , 
    private router : Router , private productService : ProductService){

    this.client_id = Number(aRoute.snapshot.paramMap.get('client_id'))
    console.log(this.client_id)

  }

  ngOnInit(){
     this.getClient(this.client_id)
     this.getProductByClient(this.client_id) 
  }


  getClient(client_id : number){
    this.clientService.getClient(client_id).subscribe(data=>{
      console.log(data)
    this.client = data
    })
  }

  getProduct(product_id : number){
    this.productService.getProduct(product_id).subscribe((data)=>{
      this.product = data
    })
  }

  getProductByClient(id_client : number){
    this.clientService.productByClient(id_client).subscribe(client => {
      console.log(client)

      

      this.productList = client
      
      
       let product_id = Number(client[0].product_id)
      
      

       this.productService.getProduct(product_id).subscribe((product)=>{
        this.product = product
       })
     
    })
  }

  
  

  deleteProduct(product_id : number){
    if (!confirm('You want delete this product of this list'))return
    
    this.productService.deleteProduct(product_id).subscribe(()=>{
      console.log('Product deleted')
      this.getProductByClient(this.client_id)
    })
  }


  printPage(id_client : number , product_id : number){
    this.router.navigate(['home/print' , id_client , product_id])
  }


  skip(){
    this.router.navigate(['home/clients'])
  }

  btnAddProduct(client_id : number){
    this.router.navigate(['home/products/add-product' , client_id])
  }

  btnEditProduct( product_id : number , id_client : number){
    this.router.navigate(['home/products/edit-product' , product_id , id_client])
    console.log(product_id , id_client)
  }

  btnInfoProduct(){}

}
