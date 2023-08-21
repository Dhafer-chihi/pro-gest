import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientList : Client[] = []

  constructor(private clientService : ClientService){}

  ngOnInit(){
    this.getAllClients()
  }

  getAllClients(){
    this.clientService.getClients().subscribe(data=>{
      console.log(data)
      this.clientList = data
    })
  }


  deleteClient(client_id : number){
    if (!confirm('You want delete this client'))
    return

    this.clientService.deletClient(client_id).subscribe(()=>{
      console.log('Delete Client')
      this.getAllClients()
    })
  }


  addEditClient(){}

  infoClient(){}


}
