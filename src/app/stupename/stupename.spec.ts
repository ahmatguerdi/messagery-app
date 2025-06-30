import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stupename } from './stupename';

describe('Stupename', () => {
  let component: Stupename;
  let fixture: ComponentFixture<Stupename>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stupename]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stupename);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
