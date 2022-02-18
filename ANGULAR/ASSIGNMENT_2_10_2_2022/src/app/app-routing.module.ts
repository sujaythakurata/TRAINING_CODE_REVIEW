import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmployeeRouteModule } from './modules/employee/employee-route.module';
import { ProductRouteModule } from './modules/product/product-route.module';
import { AuthService } from './services/auth/auth.service';

const routes: Routes = [
  {path:'', component:LoginComponent, pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {
    path:"employee",
    loadChildren:()=>{return EmployeeRouteModule},
    canActivate:[AuthService]
  },
  {
    path:"product",
    loadChildren:()=>{return ProductRouteModule},
    canActivate:[AuthService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
