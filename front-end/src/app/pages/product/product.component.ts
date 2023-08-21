import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  productList : Product[] = []
  product_id : number
  id_client : number 
  constructor(private productService : ProductService , private aRouter : ActivatedRoute , private router : Router){

    this.product_id = Number(aRouter.snapshot.paramMap.get('product_id'))
    console.log(this.product_id)

    this.id_client = Number(aRouter.snapshot.paramMap.get('id_client'))
    console.log(this.id_client)
  }

  ngOnInit(){
      this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getproducts().subscribe((data)=>{
      this.productList = data
    })
  }


  deleteProduct(product_id : number){

  if (!confirm('You want delete this product'))
  return

    this.productService.deleteProduct(product_id).subscribe(()=>{
      console.log('Delete Product')
      this.getAllProducts()
    })
  }

  btnEditProduct( product_id : number , id_client : number){
    this.router.navigate(['home/products/edit-product' , product_id , id_client])
  }
}
