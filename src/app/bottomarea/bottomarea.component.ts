import { Component } from '@angular/core';
import { ICONS } from '../../assets/icon-config';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bottomarea',
  templateUrl: './bottomarea.component.html',
  styleUrls: ['./bottomarea.component.css']
})
export class BottomareaComponent {
  ICONS = ICONS;
  users: any[] = []; 

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data.users;
    });
  }
}
