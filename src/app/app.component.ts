import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from './BackEnd/spacex-api.service';
import { LaunchOptions } from './Models/launchOptions';
import {Observable} from 'rxjs';

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

  constructor(private spacexService: SpacexApiService) {
  }

  ngOnInit(): void {
    this.spacexService.getCompanyInfo()
                      .subscribe(data =>
                      console.log(data));
    this.spacexService.getLatestLaunches()
                      .subscribe(data =>
                      console.log(data));
    this.spacexService.getPastLaunches()
                      .subscribe(data =>
                      console.log(data));
    this.spacexService.getUpcomingLaunches()
                      .subscribe(data =>
                      console.log(data));

    let launchOptions = {
      order        : 'desc',
      flight_number: 61
    }

    this.spacexService.getLaunches(launchOptions)
                      .subscribe(data =>
                      console.log(data));

    this.spacexService.getCoreData('B1041')
                      .subscribe(data =>
                      console.log(data));
  }
}
