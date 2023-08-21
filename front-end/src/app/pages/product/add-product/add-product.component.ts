import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form : FormGroup
  operation : string = 'Add '

  product_id : number
  id_client : number
  

  constructor(private fb : FormBuilder , private aRoute : ActivatedRoute , private productService : ProductService,
    private router : Router){
    this.form = this.fb.group({
      category : ['' , Validators.required],
      name : ['' , Validators.required],
      sn : ['' , Validators.required],
      accessory : [''],
      client_diag : [''],
      tech_diag : [''],
      etat : ['' , Validators.required],
      
    })

    this.product_id = Number(aRoute.snapshot.paramMap.get('product_id'))
    console.log(this.product_id)

    this.id_client = Number(aRoute.snapshot.paramMap.get('id_client'))
    console.log(this.id_client)



  }

  ngOnInit(): void {
    this.edit(this.product_id)
      
  }


  edit(product_id : number){
    if (product_id !== 0)
    this.operation = 'Edit '
    this.getProduct(product_id)
  }


  getProduct(product_id : number){
    this.productService.getProduct(product_id).subscribe((data)=>{
      this.form.setValue({
        category : data.category,
        name : data.name,
        sn : data.sn , 
        accessory : data.accessory,
        client_diag : data.client_diag,
        tech_diag : data.tech_diag,
        etat : data.etat
      })
    })
  }

  addEditProduct(){
    const product : Product = {
      product_id : this.form.value.product_id,
      category : this.form.value.category,
      name : this.form.value.name,
      sn : this.form.value.sn,

      accessory : this.form.value.accessory,
      client_diag : this.form.value.client_diag,
      tech_diag: this.form.value.tech_diag,
      etat : this.form.value.etat,
      create_date : new Date(),
      id_client : this.id_client
    }

    console.log(product)

    if (this.product_id == 0){
      // Add product
      
        this.productService.postProduct(product , this.id_client).subscribe(()=>{
          console.log('Add porduct')
          this.router.navigate(['home/clients/view-client/' , this.id_client])
          
        })
    
    }else{
      //Edit product 

      this.productService.putProduct(product , this.product_id).subscribe(()=>{
        console.log('Update client')
        this.router.navigate(['home/clients/view-client/' , this.id_client])

      })
    }

   

  }



  cancel(){
    this.router.navigate(['home/clients/view-client/' , this.id_client])
  }
}
