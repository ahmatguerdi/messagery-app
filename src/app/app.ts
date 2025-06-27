import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyProfil } from './my-profil/my-profil';
import { Onboarding } from './onboarding/onboarding';

// import { phoneNumber} from @

import { PhoneNumber } from "./phone-number/phone-number";
import { Keyboard } from './keyboard/keyboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MyProfil, Onboarding, PhoneNumber, Keyboard
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'messageryApp';
}
