import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { Constants } from '../modules/constants/constants.module';

//  Services
import { AuthGuard } from '../auth/auth.guard';

//  Components
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from '../shared/products/products.component';
import { AddNewProductComponent } from '../shared/add-new-product/add-new-product.component';
import { EditProductComponent } from '../shared/edit-product/edit-product.component';
import { OrdersComponent } from '../shared/orders/orders.component';

const constants = Constants;

const routes: Routes = [
  {
    path: constants.ROUTERS.HOME,
    component: LayoutComponent,
    canActivate: [AuthGuard],
    data: { title: 'Dashboard | Home' },
    children: [
      {
        path: Constants.ROUTERS.HOME,
        redirectTo: constants.ROUTERS.PRODUCTS,
      },
      {
        path: constants.ROUTERS.PRODUCTS,
        component: ProductsComponent,
        canActivate: [AuthGuard],
        data: { title: 'Dashboard | Products' },
      },
      {
        path: constants.ROUTERS.ADD_NEW_PRODUCT,
        component: AddNewProductComponent,
        canActivate: [AuthGuard],
        data: { title: 'Dashboard | Add new product' },
      },
      {
        path: constants.ROUTERS.EDIT_PRODUCT,
        component: EditProductComponent,
        canActivate: [AuthGuard],
        data: { title: 'Dashboard | Edit product' },
      },
      {
        path: constants.ROUTERS.ORDERS,
        component: OrdersComponent,
        canActivate: [AuthGuard],
        data: { title: 'Dashboard | Orders' },
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
