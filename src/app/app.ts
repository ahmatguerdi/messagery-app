import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Icons } from './icons/icons';
import { Contacts } from './contacts/contacts';
// import { MyProfil } from './my-profil/my-profil';
// import { Onboarding } from './onboarding/onboarding';

// import { phoneNumber} from @

// import { PhoneNumber } from "./phone-number/phone-number";
// import { Keyboard } from './keyboard/keyboard';

import {Stupename} from './stupename/stupename';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Stupename, Icons, Contacts],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'messageryApp';
}
