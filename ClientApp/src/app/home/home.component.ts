import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getBaseUrl } from '../../main';
import { empty } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  maintext: string;
  subtext: string;
  result: string;
  errorMessage: string;
  baseUrl: string;

  constructor(private http: HttpClient) {
  }

  //Here we will check the string, format it and send it to the backend for checking
  public subStringCheck(text1, text2) {
    //remove the old messages
    this.cleanOutput();
    //check the strings aren't empty
    if (this.stringValid(text1, text2)) {
      //clean up the strings
      this.maintext = text1.trim();
      this.subtext = text2.trim();
      //get the base url config
      this.baseUrl = getBaseUrl();
      //send the get request in uri encoded strings
      this.http.get<string>(this.baseUrl + 'substringchecker' + "/" + encodeURIComponent(this.maintext) + "/" +  encodeURIComponent(this.subtext)).subscribe(compResult => {
         this.result = compResult;
      }, error => console.error(error));
    } else {
      this.errorMessage = "Something appears to be wrong with one of your texts, please try again";
    }
  }

  //Check for blank strings or strings of 3 or less full stop characters
  // the full stop characters break the http request but it works with more
  // than 3 or if its mixed with other characters
  private stringValid(maintext, subtext) {
    if (maintext === "" || subtext === "" ||
      maintext.length === 0 || subtext.length === 0 ||
      maintext === "." || subtext === "." ||
      maintext === ".." || subtext === ".." ||
      maintext === "..." || subtext === "...") {
      return false;
    } else {
      return true;
    }
  }

  private cleanOutput()
  {
    this.errorMessage = null;
    this.result = null;
  }
}


