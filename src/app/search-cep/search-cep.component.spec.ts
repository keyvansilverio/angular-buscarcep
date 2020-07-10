import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCepComponent } from './search-cep.component';

describe('SearchCepComponent', () => {
  let component: SearchCepComponent;
  let fixture: ComponentFixture<SearchCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
