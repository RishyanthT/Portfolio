import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showCopyMessage = false;

  handleEmailClick(event: MouseEvent) {
    const email = 'rishyanthvarma555@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      this.showCopyMessage = true;
      setTimeout(() => {
        this.showCopyMessage = false;
      }, 2500);
    });
  }
}