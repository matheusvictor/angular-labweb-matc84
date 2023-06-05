import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent {

  @Input() photo: string = '';
  @Input() name: string = '';
  @Input() socialIcon: string = '';
  @Input() github: string = '';
  @Input() linkedin: string = '';

  socialIcons = {
    "linkedin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    "github": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  }
}

