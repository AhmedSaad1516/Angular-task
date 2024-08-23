import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonLoaderLineComponent } from './skeleton-loader-line.component';

describe('SkeletonLoaderLineComponent', () => {
  let component: SkeletonLoaderLineComponent;
  let fixture: ComponentFixture<SkeletonLoaderLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonLoaderLineComponent]
    });
    fixture = TestBed.createComponent(SkeletonLoaderLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
