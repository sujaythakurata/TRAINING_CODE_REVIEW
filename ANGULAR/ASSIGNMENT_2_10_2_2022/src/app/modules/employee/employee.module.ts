import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeRouteModule } from './employee-route.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeAddComponent
  ],
  imports: [
    CommonModule,
    EmployeeRouteModule,
    FormsModule,
    DataTablesModule
  ],
  exports:[
    DataTablesModule
  ]
})
export class EmployeeModule { }
