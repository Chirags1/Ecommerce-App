import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { BrandsComponent } from './brands/brands.component';
import { BrandsFormComponent } from './brands-form/brands-form.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'admin/categories/add',
    component: CategoriesFormComponent,
  },
  {
    path: 'admin/categories/edit/:id',
    component: CategoriesFormComponent,
  },
  {
    path: 'brands',
    component: BrandsComponent,
  },
  {
    path: 'admin/brand/add',
    component: BrandsFormComponent,
  },
  {
    path: 'admin/brand/edit/:id/:name',
    component: BrandsFormComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/add',
    component: ProductFormComponent,
  },
  {
    path: 'product/edit/:id/:name',
    component: ProductFormComponent,
  },
  {
    path: 'productDetail/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'productSearch',
    component: ProductListComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
