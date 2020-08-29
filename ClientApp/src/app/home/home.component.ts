import { Component, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getBaseUrl } from '../../main';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  maintext: string;
  subtext: string;
  params = new HttpParams();
  result: string;
  errorMessage: string;
  baseUrl: string;

  constructor(private http: HttpClient) {
    /*http.get<string>(baseUrl + 'substringchecker', { params: this.params }).subscribe(result => {
      var compareResult = result;
    }, error => console.error(error));*/
  }

  public subStringCheck(text1, text2) {
    //check the strings aren't empty
    console.log("clicked submit with text1="+text1+"text2="+text2);
    if (this.stringValid(text1, text2)) {
      this.maintext = text1.trim();
      this.subtext = text2.trim();
      this.params.append('maintext', this.maintext);
      this.params.append('subtext', this.subtext);
      //this.result = this.maintext + this.subtext;
      this.baseUrl = getBaseUrl();
      this.http.get<string>(this.baseUrl + 'substringchecker' + "/" + this.maintext + "/" + this.subtext).subscribe(compResult => {
         this.result = compResult;
      }, error => console.error(error));
    } else {
      this.errorMessage = "Something appears to be wrong with one of your texts, please try again";
    }
  }

  private stringValid(maintext, subtext) {
    if (maintext === "" || subtext === "" || maintext.length === 0 || subtext.length === 0) {
      return false;
    } else {
      return true;
    }
  }
}


