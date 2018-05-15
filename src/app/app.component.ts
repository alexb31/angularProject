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
  title = 'app';

  constructor(private spacexService: SpacexApiService) {
  }

  ngOnInit(): void {
    this.spacexService.getCompanyInfo()
                      .subscribe(data =>
                      console.log(JSON.stringify(data)));
    this.spacexService.getLatestLaunches()
                      .subscribe(data =>
                      console.log(JSON.stringify(data)));
    this.spacexService.getPastLaunches()
                      .subscribe(data =>
                      console.log(JSON.stringify(data)));
    this.spacexService.getUpcomingLaunches()
                      .subscribe(data =>
                      console.log(JSON.stringify(data)));

    let options = {
      order        : 'desc',
      flight_number: 61
    }

    this.spacexService.getLaunches(options)
                      .subscribe(data =>
                      console.log(data));
  }
}
