import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListcompComponent } from './table-listcomp.component';

describe('TableListcompComponent', () => {
  let component: TableListcompComponent;
  let fixture: ComponentFixture<TableListcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableListcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
