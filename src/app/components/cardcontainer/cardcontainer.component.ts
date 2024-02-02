import { Component } from '@angular/core';
import { TechCard } from 'src/app/model/tech.card';

@Component({
  selector: 'app-cardcontainer',
  templateUrl: './cardcontainer.component.html',
  styleUrls: ['./cardcontainer.component.css'],
})
export class CardcontainerComponent {
  cardDeatails: TechCard = new TechCard();

  constructor() {
    this.cardDeatails.description = 'dummy description';
    this.cardDeatails.heading = 'MyCard';
    this.cardDeatails.imagePath = 'src/assets/fb.jpg';
  }
}
