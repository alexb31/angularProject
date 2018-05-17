import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../BackEnd/spacex-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector   : 'app-capsule-data',
  templateUrl: './capsule-data.component.html',
  styleUrls  : ['./capsule-data.component.css']
})
export class CapsuleDataComponent implements OnInit {
  caps;
  name = "";

  constructor(private spacexService : SpacexApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['name'] !== undefined){
        console.log(params['name']);
        this.name = params['name'];
        this.caps = [];
        this.spacexService.getCapsuleData(this.name).subscribe(data => {this.caps[0] = data; console.log(data)});
      }else{
    this.spacexService.getCapsuleData(this.name).subscribe(data => {this.caps = data; console.log(data)});
      }
    });
  }

}
