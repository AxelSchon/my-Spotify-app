import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePlaylistLayoutComponent } from './create-playlist-layout.component';

describe('CreatePlaylistComponent', () => {
  let component: CreatePlaylistLayoutComponent;
  let fixture: ComponentFixture<CreatePlaylistLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlaylistLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlaylistLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
