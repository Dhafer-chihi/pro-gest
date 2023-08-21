import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit{

  form : FormGroup
  operation : string = 'Add '
  client_id : number

  constructor(private fb : FormBuilder , private aRoute : ActivatedRoute , private clientService : ClientService ,
    private router : Router){
    this.form = this.fb.group({
      firstname : ['' , Validators.required],
      lastname : ['' , Validators.required],
      mobile : ['' , Validators.required],
      email : ['' , Validators.required]
    })

    this.client_id = Number(aRoute.snapshot.paramMap.get('client_id'))
    console.log(this.client_id)

  }
  ngOnInit() {
     this.edit(this.client_id)   
  }

  edit(client_id : number){
    if (client_id !== 0)
    this.operation = 'Edit '
    this.getClient(client_id)
  }


  getClient(client_id : number){
    this.clientService.getClient(client_id).subscribe(data=>{
      this.form.setValue({
        firstname : data.firstname,
        lastname : data.lastname,
        mobile : data.mobile,
        email : data.email 
      })
    })
  }




  addEditClient(){
    const client : Client = {
      client_id : this.form.value.id,
      firstname : this.form.value.firstname,
      lastname : this.form.value.lastname,
      mobile : this.form.value.mobile,
      email : this.form.value.email,
      create_date : new Date()
    }


    if (this.client_id == 0){
      // Add client --> post client

      this.clientService.addClient(client).subscribe((data)=>{
        console.log('Add client')
        this.router.navigateByUrl(`home/clients`)
      })

    }
    
    else{
      // Edit client -->put client

      this.clientService.updateClient(this.client_id , client).subscribe(()=>{
        console.log('Update Client')
        this.router.navigate(['home/clients'])
      })

    }    
    
  }





  cancel(){
    this.router.navigate(['home/clients'])
  }
}
