import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../BackEnd/spacex-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector   : 'app-rocket-data',
  templateUrl: './rocket-data.component.html',
  styleUrls  : ['./rocket-data.component.css']
})
export class RocketDataComponent implements OnInit {
  rockets;
  name = "";

  constructor(private spacexService : SpacexApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['name'] !== undefined){
        console.log(params['name']);
        this.name    = params['name'];
        this.rockets = [];
        this.spacexService.getRocketData(this.name).subscribe(data => {this.rockets[0] = data; console.log(data)});
      }else{
        this.spacexService.getRocketData(this.name).subscribe(data => {this.rockets = data; console.log(data)});
      }
    });

  }

}
