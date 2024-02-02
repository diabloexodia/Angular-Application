import { Component, Input } from '@angular/core';
import { TechCard } from 'src/app/model/tech.card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() dataToPopulate?: TechCard;

  ngOnChanges() {
    console.log(this.dataToPopulate);
  }
}
