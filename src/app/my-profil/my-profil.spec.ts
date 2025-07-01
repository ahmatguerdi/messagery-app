import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfil } from './my-profil';

describe('MyProfil', () => {
  let component: MyProfil;
  let fixture: ComponentFixture<MyProfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProfil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProfil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
