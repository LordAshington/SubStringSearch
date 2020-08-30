import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have header', () =>{
    // we are accessing "h1"
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('Substring Search');
  })

  it('should have instruction text', () =>{
    // we are accessing "h1"
    const paragraph = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(paragraph.innerHTML).toBe('Please enter a string of text and a substring to search for');
  })


  it('should have Submit Button', () => {
    const btn = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;
    expect(btn.innerHTML).toBe('Submit');
  });

  it('should have text input', () => {
    const input = fixture.debugElement.nativeElement.querySelector('#text1');
    expect(input).toBeTruthy;
  });

  it('should have subtext input', () => {
    const input = fixture.debugElement.nativeElement.querySelector('#text2');
    expect(input).toBeTruthy;
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
