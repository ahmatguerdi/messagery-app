import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icons } from "../icons/icons";

@Component({
  selector: 'app-contacts',
  imports: [RouterLink, Icons],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts {
}

// const timeElement = document.querySelector('.time');
// if (timeElement) {
//   timeElement.textContent = `${10}:${50}`;
// }

// document.querySelectorAll('.contact').forEach(contact => {
//   contact.addEventListener('click', function (this: HTMLElement) {
//     console.log('Contact cliqué:', this.querySelector('.contact-name')?.textContent);
//     this.classList.add('active');
//   });
// });

