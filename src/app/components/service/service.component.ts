import { Component, Input } from '@angular/core';
import { Service } from 'src/app/model/services';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {
  @Input() data?: Service;

  ngOnChanges() {
    console.log(this.data);
  }
}
