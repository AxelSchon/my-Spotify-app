import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumLayoutComponent } from './album-layout.component';

describe('AlbumLayoutComponent', () => {
  let component: AlbumLayoutComponent;
  let fixture: ComponentFixture<AlbumLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
