import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../BackEnd/spacex-api.service';

@Component({
  selector   : 'app-detailed-capsule-data',
  templateUrl: './detailed-capsule-data.component.html',
  styleUrls  : ['./detailed-capsule-data.component.css']
})
export class DetailedCapsuleDataComponent implements OnInit {

  caps;

  constructor(private spacexService : SpacexApiService) { }

  ngOnInit() {
    this.spacexService.getCapsuleData().subscribe(data => {this.caps = data; console.log(data)});
  }

}
