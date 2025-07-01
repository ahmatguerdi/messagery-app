import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contacts } from './contacts';

describe('Contacts', () => {
  let component: Contacts;
  let fixture: ComponentFixture<Contacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contacts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contacts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


export class ContactsComponent {
  contacts = [
    { initials: 'RSM', name: 'Ribeye Stephane Mbaimou', status: 'Online', online: true },
    { initials: 'AGE', name: 'Ahmat Gerdi Erda', status: 'Online', online: true },
    { initials: 'DTS', name: 'Djasrane Tolba Succés', status: 'Last seen today at 8:40', online: false },
    { initials: 'FMS', name: 'Fatime Mahamat Sileh', status: 'Last seen today at 8:40', online: false },
    { initials: 'DB', name: 'Dingamlar Bienvenu', status: 'Last seen today at 8:40', online: false },
    { initials: 'LA', name: 'Leslie Alexander', status: 'Last seen today at 8:40', online: false },
    { initials: 'FM', name: 'Floyd Miles', status: 'Last seen long time ago', online: false },
  ];
}

