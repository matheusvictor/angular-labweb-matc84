import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent {

  @Input() photo: string = 'https://media.licdn.com/dms/image/D4D03AQEja5FyHNsHow/profile-displayphoto-shrink_200_200/0/1683639970790?e=1690416000&v=beta&t=lLMn5Fwc9zgVVkTusiZb3JBPysTKHlcEhVKoEFGrow0';
  @Input() name: string = 'Lorem ipsum';
}
