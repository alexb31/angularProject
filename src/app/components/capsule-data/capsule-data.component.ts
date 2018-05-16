import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../BackEnd/spacex-api.service';

@Component({
  selector: 'app-capsule-data',
  templateUrl: './capsule-data.component.html',
  styleUrls: ['./capsule-data.component.css']
})
export class CapsuleDataComponent implements OnInit {
  capsules;

  constructor(private spacexService : SpacexApiService) { }

  ngOnInit() {
    this.spacexService.getCapsuleData().subscribe(data => {this.capsules = data; console.log(data)});
  }

}
