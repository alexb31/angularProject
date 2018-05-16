import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../BackEnd/spacex-api.service';

@Component({
  selector   : 'app-detailed-core-data',
  templateUrl: './detailed-core-data.component.html',
  styleUrls  : ['./detailed-core-data.component.css']
})
export class DetailedCoreDataComponent implements OnInit {
  cores;

  constructor(private spacexService : SpacexApiService) { }
  ngOnInit() {
    this.spacexService.getCoreData().subscribe(data => {this.cores = data; console.log(data)});
  }

}
