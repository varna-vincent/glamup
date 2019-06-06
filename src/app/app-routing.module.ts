import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';
import { OurAppComponent } from './components/our-app/our-app.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '', 
	  component: HeaderComponent,
	  children: [
		{ path: 'categories', component: CategoriesComponent },
		{ path: 'ourApp', component: OurAppComponent },
		{ path: 'addProduct', component: AddProductComponent },
		{ path: 'myProducts', component: ListProductsComponent },
		{ path: 'allProducts', component: AllProductsComponent },
    	{ path: 'login', component: LoginComponent }
	  ]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ HomeComponent, HeaderComponent, FooterComponent, CategoriesComponent, LoginComponent, AddProductComponent, ListProductsComponent, AllProductsComponent, OurAppComponent ]
