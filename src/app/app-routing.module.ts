import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '', 
	  component: HeaderComponent,
	  children: [
		{ path: 'categories', component: CategoriesComponent },
    	{ path: 'login', component: LoginComponent }
	  ]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ HomeComponent ]
