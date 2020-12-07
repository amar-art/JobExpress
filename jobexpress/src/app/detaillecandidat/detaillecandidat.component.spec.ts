import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillecandidatComponent } from './detaillecandidat.component';

describe('DetaillecandidatComponent', () => {
  let component: DetaillecandidatComponent;
  let fixture: ComponentFixture<DetaillecandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillecandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
