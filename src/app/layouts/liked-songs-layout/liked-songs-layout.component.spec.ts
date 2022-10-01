import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikedSongsLayoutComponent } from './liked-songs.component';

describe('LikedSongsComponent', () => {
  let component: LikedSongsLayoutComponent;
  let fixture: ComponentFixture<LikedSongsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedSongsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedSongsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
