import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UserComponent } from './user/user.component';
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
import { StockComponent } from './stock/stock.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from '../components/menu/menu.component';
import { HeaderComponent } from '../components/header/header.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ViewClientComponent } from './client/view-client/view-client.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { PrintPageComponent } from './print-page/print-page.component';
import { ViewProductComponent } from './product/view-product/view-product.component';

@NgModule({
  declarations: [
    UserComponent,
    ClientComponent,
    ProductComponent,
    StockComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    MenuComponent,
    HeaderComponent,
    AddClientComponent,
    ViewClientComponent,
    AddProductComponent,
    PrintPageComponent,
    ViewProductComponent
    
   
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    
    
  ]
})
export class PagesModule { }
