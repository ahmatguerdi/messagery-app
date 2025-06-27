import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyProfil } from './my-profil/my-profil';
import { Onboarding } from './onboarding/onboarding';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MyProfil, Onboarding, 
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'messageryApp';
}
