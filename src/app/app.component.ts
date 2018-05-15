import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from './BackEnd/spacex-api.service';
import {Observable} from 'rxjs';


import { CompanyInfo } from './Models/CompanyInfo';
import { Launch } from './Models/launch';
import { Launchpad } from './Models/launchpad';
import { CapPart } from './Models/capPart';
import { CorePart } from './Models/corePart';
import { CoreOptions } from './Models/coreOptions';
import { CapOptions } from './Models/capOptions';
import { Capsule } from './Models/capsule';
import { Rocket } from './Models/rocket';
import { LaunchOptions } from './Models/launchOptions';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuItems = [{
    name : 'Company Data',
    path : '/companyInfo'
  },
  {
    name : 'Launches',
    path : '/launches'
  },
];
  title = 'app';
  companyInfo;
  capsule;
  cap;
  core;
  launch;
  rocket;
  launchpad;
  lastLaunches;
  pastLaunches;
  upcomingLaunches;
  allLaunches;

  constructor(private spacexService: SpacexApiService) {
  }

  ngOnInit(): void {
    this.spacexService.getCompanyInfo()
      .subscribe(data =>{
        this.companyInfo = data;
      });

    this.spacexService.getLatestLaunches()
      .subscribe(data =>{
        this.lastLaunches = data;
      });

    this.spacexService.getPastLaunches()
      .subscribe(data =>{
        this.pastLaunches = data;
      });

    this.spacexService.getUpcomingLaunches()
      .subscribe(data =>{
        this.upcomingLaunches = data;
      });

    let launchOptions = {
      order        : 'desc',
      flight_number: 61
    }

    this.spacexService.getLaunches(launchOptions)
      .subscribe(data =>{
        this.allLaunches = data;
      });

    this.spacexService.getCoreData('B1041')
      .subscribe(data =>{
        this.core = data;
      });

  }
}