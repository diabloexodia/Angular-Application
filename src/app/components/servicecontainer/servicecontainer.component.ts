import { Component } from '@angular/core';
import { Service } from 'src/app/model/services';

@Component({
  selector: 'app-servicecontainer',
  templateUrl: './servicecontainer.component.html',
  styleUrls: ['./servicecontainer.component.css'],
})
export class ServicecontainerComponent {
  services: Service = new Service();
  services1: Service = new Service();

  constructor() {
    this.services.description =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui laborum cumque reiciendis repellendus, saepe laboriosam possimus mollitia aspernatur facere dolorem non ipsa obcaecati. Earum.';
    this.services.heading = 'Hand Carry';
    this.services1.description =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui laborum cumque reiciendis repellendus, saepe laboriosam possimus mollitia aspernatur facere dolorem non ipsa obcaecati. Earum.';
    this.services1.heading = 'Software Development';
  }
}
