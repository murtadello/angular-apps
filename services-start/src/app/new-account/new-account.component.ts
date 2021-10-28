import { Component } from '@angular/core';
import { AcountsService } from '../acounts.service';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,private accountsService: AcountsService){
    this.accountsService.statusUpdate.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAcount(accountName, accountStatus);
    
    //this.loggingService.logStatusChange(accountStatus);
    
  }
}
