import { EventEmitter } from '@angular/core';
import { LoggingService } from "./logging.service";

export class AcountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      statusUpdate = new EventEmitter<string>();

      constructor(private logginService: LoggingService){}
      addAcount(name:string, status: string){
          this.accounts.push({name: name, status: status});
          this.logginService.logStatusChange(status);

      }
      updateStatus(id:number , status: string){
          this.accounts[id].status = status;
          this.logginService.logStatusChange(status);

      }
}