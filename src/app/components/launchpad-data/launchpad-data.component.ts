import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../BackEnd/spacex-api.service';

@Component({
  selector   : 'app-launchpad-data',
  templateUrl: './launchpad-data.component.html',
  styleUrls  : ['./launchpad-data.component.css']
})
export class LaunchpadDataComponent implements OnInit {
  launchpads;

  constructor(private spacexService : SpacexApiService) { }

  ngOnInit() {
    this.spacexService.getLaunchpadData().subscribe(data => {this.launchpads = data; console.log(data)});
  }

}
