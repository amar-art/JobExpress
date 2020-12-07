import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcandidatsComponent } from './listcandidats.component';

describe('ListcandidatsComponent', () => {
  let component: ListcandidatsComponent;
  let fixture: ComponentFixture<ListcandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcandidatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
