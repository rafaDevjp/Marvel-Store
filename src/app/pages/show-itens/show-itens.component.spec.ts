import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowItensComponent } from './show-itens.component';

describe('ShowItensComponent', () => {
  let component: ShowItensComponent;
  let fixture: ComponentFixture<ShowItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
