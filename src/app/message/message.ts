import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icons } from "../icons/icons";

@Component({
  selector: 'app-message',
  imports: [Icons, RouterLink],
  templateUrl: './message.html',
  styleUrl: './message.css',
})
export class Message {

}
