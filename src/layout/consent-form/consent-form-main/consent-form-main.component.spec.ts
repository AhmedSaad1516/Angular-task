import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentFormMainComponent } from './consent-form-main.component';

describe('ConsentFormMainComponent', () => {
  let component: ConsentFormMainComponent;
  let fixture: ComponentFixture<ConsentFormMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsentFormMainComponent]
    });
    fixture = TestBed.createComponent(ConsentFormMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
