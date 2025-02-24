import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperIconsComponent } from './cooper-icons.component';

describe('CooperIconsComponent', () => {
  let component: CooperIconsComponent;
  let fixture: ComponentFixture<CooperIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooperIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
