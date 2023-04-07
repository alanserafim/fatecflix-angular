import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  constructor() { }

  load(){
    if(sessionStorage.getItem("refresh") == "true"){
      this.setFalse();
      location.reload();
    }
  }

  setFalse(){
    sessionStorage.setItem("refresh", "false");
  }

  setTrue(){
    sessionStorage.setItem("refresh", "true");
  }

}
