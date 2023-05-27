import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent {

  @Input() photo: string = 'https://img.freepik.com/free-icon/user_318-804790.jpg';
  @Input() name: string = 'Lorem Ipsum';
  @Input() socialIcon: string = '';
  socialIcons = {
    "linkedin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    "github": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  }
}
