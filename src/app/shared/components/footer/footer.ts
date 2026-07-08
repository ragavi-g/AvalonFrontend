import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();
  applicationName = 'Avalon Risk Management';
  footerLinks = [
    { text: 'Privacy Policy', url: '#' },
    { text: 'Terms of Use', url: '#' },
    { text: 'Support', url: '#' },
    { text: 'Contact Us', url: '#' }
  ];
}
