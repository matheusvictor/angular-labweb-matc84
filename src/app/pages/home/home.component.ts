import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent {

  title: string = 'Lorem Ipsum';
  logo: string = 'https://octodex.github.com//images/adventure-cat.png';
  isHomeSelected: boolean = true;
  isAboutSelected: boolean = false;

  showAboutSection() {
    this.isHomeSelected = false;
    this.isAboutSelected = true;
    console.log('Cliquei no menu Início');
  }

  showHomeSection() {
    this.isHomeSelected = true;
    this.isAboutSelected = false;
  }

}
