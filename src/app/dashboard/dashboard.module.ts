import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { MaterialModule } from '../modules/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { Constants } from 'src/app/modules/constants/constants.module';

// Components
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './products/products.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrdersComponent } from './orders/orders.component';
import { ConfigureComponent } from './configure/configure.component';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { MessagesComponent } from './messages/messages.component';

const COMPONENTS = [
  HeaderComponent,
  LayoutComponent,
  ProductsComponent,
  AddNewProductComponent,
  EditProductComponent,
  OrdersComponent,
  ConfigureComponent,
  UsersComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CoreRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    Constants,
  ],
  declarations: [
    ...COMPONENTS,
    CustomersComponent,
    FeedbacksComponent,
    MessagesComponent,
  ],

})
export class DashboardModule { }
