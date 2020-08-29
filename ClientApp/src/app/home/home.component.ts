import { Component, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  maintext: string;
  subtext: string;
  params = new HttpParams();
  result: string;

  private subStringCheck(text1, text2) {
    //check the strings arent empty
    this.maintext = text1.trim();
    this.subtext = text2.trim();
    this.params.append('maintext', this.maintext);
    this.params.append('subtext', this.subtext);
    this.result = this.maintext + this.subtext;
  }

  private stringValid(maintext, subtext) {
    if (maintext === "" || subtext === "" || maintext.length === 0 || subtext.length === 0) {
      return false;
    }
  }

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<string>(baseUrl + 'string', { params : this.params}).subscribe(result => {
      var compareResult = result;
    }, error => console.error(error));
  }
}


