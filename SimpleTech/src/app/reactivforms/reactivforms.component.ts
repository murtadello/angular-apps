import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactivforms',
  templateUrl: './reactivforms.component.html',
  styleUrls: ['./reactivforms.component.css']
})
export class ReactivformsComponent implements OnInit {

  reactivForm : FormGroup;


  constructor(private fb: FormBuilder) { }

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
    'loanName' : new FormControl(),
    'loanDescription' : new FormControl(),
    'loanType': new FormControl()

  })

  const newLoanObj =  {
    'loanName' : 'Murtazas Loan',
    'loanDescription' : 'Personal Loan',
    'loanType': 'This is for Monitor'

  }
  this.reactivForm.setValue(newLoanObj);
  }


  addLoanType(){
    //console.log(this.reactivForm.value);
    console.log(this.reactivForm.get('loanName')?.value)
  }

}
