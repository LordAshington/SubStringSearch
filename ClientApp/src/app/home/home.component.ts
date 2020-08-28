import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public subStringCheck() {
    //Get values off inputs
    var text = (<HTMLInputElement>document.getElementById("maintext")).value;
    var subtext = (<HTMLInputElement>document.getElementById("subtext")).value;
    //check they're not empty
    //send to the backend
  }

  public isEmpty(str) {
    str.trim();
  return (!str || 0 === str.length);
}
}


