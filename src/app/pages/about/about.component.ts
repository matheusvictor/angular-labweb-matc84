import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  members = [
    {
      'name': 'Emiliano',
      'photo': 'https://img.freepik.com/free-icon/user_318-804790.jpg',
      'linkedin': '',
      'github': ''
    },
    {
      'name': 'Matheus Victor',
      'photo': 'https://avatars.githubusercontent.com/u/12521391?v=4',
      'linkedin': '',
      'github': 'https://github.com/matheusvictor'
    },
    {
      'name': 'Rafael Farias',
      'photo': 'https://img.freepik.com/free-icon/user_318-804790.jpg',
      'linkedin': '',
      'github': ''
    },
  ];

}
