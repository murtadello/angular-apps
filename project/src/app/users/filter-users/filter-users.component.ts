import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.css']
})
export class FilterUsersComponent implements OnInit {

  @Input() channelName: string = '';
  @Input()
  tax: string = '';

  @Output()
  updatedList = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }
  updateUsers(){
    const userObj = {userId: 10, userName: 'Tech & Mac'}
    this.updatedList.emit(userObj);
  }

}
