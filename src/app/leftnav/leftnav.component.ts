import { Component } from '@angular/core';
import { ICONS } from '../../assets/icon-config';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent {
  ICONS = ICONS;
}

