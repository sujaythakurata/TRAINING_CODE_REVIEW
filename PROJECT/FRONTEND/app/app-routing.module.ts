import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartModule } from './modules/cart/cart.module';
import { HomepageModule } from './modules/homepage/homepage.module';
import { ProfileModule } from './modules/profile/profile.module';
import { SectionModule } from './modules/section/section.module';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> {return HomepageModule},
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'section/:category',
    loadChildren:()=>{return SectionModule}
  },
  {
    path:'cart',
    loadChildren:()=>{return CartModule},
    canActivate:[AuthService]
  },
  {
    path:'profile',
    loadChildren:()=>{return ProfileModule},
    canActivate:[AuthService]
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
