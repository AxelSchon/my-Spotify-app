import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseAllHeaderComponent } from './browse-all-header.component';

describe('BrowseAllHeaderComponent', () => {
  let component: BrowseAllHeaderComponent;
  let fixture: ComponentFixture<BrowseAllHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseAllHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseAllHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
