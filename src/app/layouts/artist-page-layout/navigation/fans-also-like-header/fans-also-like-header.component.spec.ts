import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FansAlsoLikeHeaderComponent } from './fans-also-like-header.component';

describe('FansAlsoLikeHeaderComponent', () => {
  let component: FansAlsoLikeHeaderComponent;
  let fixture: ComponentFixture<FansAlsoLikeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FansAlsoLikeHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FansAlsoLikeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
