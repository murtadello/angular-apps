import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivforms',
  templateUrl: './reactivforms.component.html',
  styleUrls: ['./reactivforms.component.css']
})
export class ReactivformsComponent implements OnInit{
  reactivForm : FormGroup;
  constructor(private fb: FormBuilder) { }


  trackLoanName(changes: SimpleChanges): void {
    console.log('value changed');
  }
  ngOnInit(): void {


    
    /*
    this.reactivForm = new FormGroup({
      'loanName' : new FormControl(),
      'loanDescription' : new FormControl(),
      'loanType': new FormControl()

    });
    */
    /*
  this.reactivForm = this.fb.group({
    'loanName' : new FormControl('Murtazas Loan'),
    'loanDescription' : new FormControl('Personal Loan'),
    'loanType': new FormControl('This is for Macbook')

  })
  */
  this.reactivForm = this.fb.group({
    'loanName' : new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(20)
    ]),
    'loanDescription' : new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(30)
     
    ])),
    'loanType': new FormControl('')
  })
/*
  const newLoanObj =  {
    'loanName' : 'Murtazas Loan',
    'loanDescription' : 'Personal Loan',
    'loanType': 'This is for Monitor'

  }
  this.reactivForm.setValue(newLoanObj);

  */
  }


  addLoanType(){
    console.log(this.reactivForm.value)
    console.log(this.reactivForm.valid);
    console.log(this.reactivForm.invalid);
    console.log(this.reactivForm.pending);
    console.log(this.reactivForm.pristine);
    console.log(this.reactivForm.touched);
    console.log(this.reactivForm.untouched);
  }
  addCustomer(){
    console.log('Hello all Customers');
  }

  resetForm(){
    this.reactivForm.reset();
  }

}
