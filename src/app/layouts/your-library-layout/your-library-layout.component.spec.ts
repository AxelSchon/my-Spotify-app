import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourLibraryLayoutComponent } from './your-library.component';

describe('YourLibraryComponent', () => {
  let component: YourLibraryLayoutComponent;
  let fixture: ComponentFixture<YourLibraryLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourLibraryLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourLibraryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
