import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClient } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    //Configures testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeComponent]
    })

    //Instantaites 
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(HomeComponent);
  });

  it('should return answer', () =>{
      component.subStringCheck('text', 'text');
      expect(component.result).toEqual('Subtext starts at text index:0');
      expect(component.errorMessage).toEqual(null);
  })

  it('should return answer', () =>{
    component.subStringCheck('text text text', 'text');
    expect(component.result).toEqual('Subtext starts at text index:0, 5, 10');
    expect(component.errorMessage).toEqual(null);
})

  it('should return error', () =>{
    component.subStringCheck('text', '.');
    expect(component.result).toEqual(null);
    expect(component.errorMessage).toEqual('Something appears to be wrong with one of your texts, please try again');
  })

  it('should return error', () =>{
    component.subStringCheck('', '.');
    expect(component.result).toEqual(null);
    expect(component.errorMessage).toEqual('Something appears to be wrong with one of your texts, please try again');
  })

  it('should return error', () =>{
    component.subStringCheck('text', '');
    expect(component.result).toEqual(null);
    expect(component.errorMessage).toEqual('Something appears to be wrong with one of your texts, please try again');
  })

  it('should return error', () =>{
    component.subStringCheck('text', 'text text');
    expect(component.result).toEqual(null);
    expect(component.errorMessage).toEqual('Subtext does not appear in Text');
  })
});
