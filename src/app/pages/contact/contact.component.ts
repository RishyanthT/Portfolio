import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  showCopyMessage = false;
  email = 'rishyanthvarma555@gmail.com';

  handleEmailClick(event: Event) {
    navigator.clipboard.writeText(this.email).then(() => {
      this.showCopyMessage = true;

      setTimeout(() => {
        this.showCopyMessage = false;
      }, 3000);
    });
  }
}