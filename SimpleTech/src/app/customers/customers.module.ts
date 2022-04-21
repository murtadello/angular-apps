import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomerComponent,
   
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CustomersComponent , AddCustomerComponent]
})
export class CustomersModule { }
