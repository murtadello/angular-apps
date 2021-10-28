import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) // Annotation and tell the angular that this is a service 
export class TestService {

  printToConsole(arg){
    console.log(arg);
    
  }

 
}
