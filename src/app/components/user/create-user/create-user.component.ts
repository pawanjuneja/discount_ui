import { XpdUser } from './../../../models/xpd-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor() { }

  lstUsers:XpdUser[] = [];

  ngOnInit() {
    
  }

}
