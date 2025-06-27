import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  imports: [],
  templateUrl: './keyboard.html',
  styleUrl: './keyboard.css'
})
export class Keyboard {
otp: string[] = ['', '', '', ''];

  autoFocusNext(event: any, index: number) {
    const input = event.target;
    const value = input.value;

    if (value && index < this.otp.length - 1) {
      const nextInput = input.parentElement.children[index + 1];
      nextInput.focus();
    }
  }
}


