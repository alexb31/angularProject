import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../BackEnd/spacex-api.service';

@Component({
  selector   : 'app-rocket-data',
  templateUrl: './rocket-data.component.html',
  styleUrls  : ['./rocket-data.component.css']
})
export class RocketDataComponent implements OnInit {
  rockets;

  constructor(private spacexService : SpacexApiService) { }

  ngOnInit() {
    this.spacexService.getRocketData().subscribe(data => {this.rockets = data; console.log(data)});
  }

}
