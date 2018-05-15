import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems = [{
    name : 'Company Data',
    path : '/companyInfo'
  },
  {
    name : 'Launches',
    path : '/launches'
  },
  {
    name: 'Capsule Data',
    path : '/capsuleData'
  },
  {
    name: 'Detailed Capsule Data',
    path: 'detailedCapsuleData'
  },
  {
    name: 'Detailed Core Data',
    path: 'detailedCoreData'
  },
  {
    name: 'Rocket Data',
    path: 'rocketData'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
