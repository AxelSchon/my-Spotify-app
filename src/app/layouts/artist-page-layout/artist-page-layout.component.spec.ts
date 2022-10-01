import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPageLayoutComponent } from './artist-page-layout.component';

describe('ArtistPageLayoutComponent', () => {
  let component: ArtistPageLayoutComponent;
  let fixture: ComponentFixture<ArtistPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistPageLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
