import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  {path:'', component:EmployeeComponent, pathMatch:'full'},
  {path:'add', component:EmployeeAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRouteModule { }
