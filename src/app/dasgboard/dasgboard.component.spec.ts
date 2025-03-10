import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasgboardComponent } from './dasgboard.component';

describe('DasgboardComponent', () => {
  let component: DasgboardComponent;
  let fixture: ComponentFixture<DasgboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasgboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasgboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
