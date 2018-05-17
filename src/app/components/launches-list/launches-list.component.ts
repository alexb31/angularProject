import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../BackEnd/spacex-api.service';
import { LaunchOptions } from '../../Models/launchOptions';

@Component({
  selector   : 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls  : ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {

  launches;
  launchOptions: LaunchOptions = { "order": "asc" };

  constructor(private spacexService : SpacexApiService) { }

  ngOnInit() {
    this.spacexService.getLaunches().subscribe(data => {this.launches = data; console.log(data)});
  }

  search() {
    this.spacexService.getLaunches(this.launchOptions).subscribe(data => {this.launches = data; console.log(data)});
  }

  latest() {
    this.launches = [];
    this.spacexService.getLatestLaunches().subscribe(data => {this.launches[0] = data; console.log(data)});
  }

  upcoming() {
    this.spacexService.getUpcomingLaunches().subscribe(data => {this.launches = data; console.log(data)});
  }
}
