import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../BackEnd/spacex-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector   : 'app-detailed-core-data',
  templateUrl: './detailed-core-data.component.html',
  styleUrls  : ['./detailed-core-data.component.css']
})
export class DetailedCoreDataComponent implements OnInit {
  cores;
  name = "";

  constructor(private spacexService : SpacexApiService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['name'] !== undefined){
        console.log(params['name']);
        this.name  = params['name'];
        this.cores = [];
        this.spacexService.getCoreData(this.name).subscribe(data => {this.cores[0] = data; console.log(data)});
      }else{
    this.spacexService.getCoreData(this.name).subscribe(data => {this.cores = data; console.log(data)});
      }
    });
  }

}
