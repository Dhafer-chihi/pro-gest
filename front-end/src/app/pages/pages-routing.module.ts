import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { StockComponent } from './stock/stock.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ViewClientComponent } from './client/view-client/view-client.component';
import { PrintPageComponent } from './print-page/print-page.component';

const routes: Routes = [
  {path : '' , component : HomeComponent , children : [
    {path : 'dashboard' , component : DashboardComponent},
    {path : 'users' , component : UserComponent},

    {path : 'clients' , component : ClientComponent},
    {path : 'clients/add-client' , component : AddClientComponent},
    {path : 'clients/edit-client/:client_id' , component : AddClientComponent},
    {path : 'clients/view-client/:client_id' , component : ViewClientComponent},

    {path : 'products' , component : ProductComponent},
    {path : 'products/add-product/:id_client' , component : AddProductComponent},
    {path : 'products/edit-product/:product_id/:id_client' , component: AddProductComponent},
    

    {path : 'print/:id_client/:product_id' , component : PrintPageComponent},


    {path : 'stock' , component : StockComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
