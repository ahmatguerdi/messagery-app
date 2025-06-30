import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {Stupename} from './stupename/stupename';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Stupename],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'messageryApp';
}
