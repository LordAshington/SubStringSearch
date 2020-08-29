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

  private subStringCheck(text1, text2) {
    this.maintext = text1;
    this.subtext = text2;
    this.params.append('maintext', this.maintext);
    this.params.append('subtext', this.subtext);
    
  }

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<string>(baseUrl + 'string', { params : this.params}).subscribe(result => {
      var compareResult = result;
    }, error => console.error(error));
  }
}


