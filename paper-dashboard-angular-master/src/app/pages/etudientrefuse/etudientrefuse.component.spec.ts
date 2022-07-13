import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudientrefuseComponent } from './etudientrefuse.component';

describe('EtudientrefuseComponent', () => {
  let component: EtudientrefuseComponent;
  let fixture: ComponentFixture<EtudientrefuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudientrefuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudientrefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
