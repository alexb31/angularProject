import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../BackEnd/spacex-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector   : 'app-launchpad-data',
  templateUrl: './launchpad-data.component.html',
  styleUrls  : ['./launchpad-data.component.css']
})
export class LaunchpadDataComponent implements OnInit {
  launchpads;
  name = "";

  constructor(private spacexService : SpacexApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['name'] !== undefined){
        console.log(params['name']);
        this.name       = params['name'];
        this.launchpads = [];
        this.spacexService.getLaunchpadData(this.name).subscribe(data => {this.launchpads[0] = data; console.log(data)});
      }else{
        this.spacexService.getLaunchpadData().subscribe(data => {this.launchpads = data; console.log(data)});
      }
    });

  }

}
