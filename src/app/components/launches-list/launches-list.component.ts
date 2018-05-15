import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../BackEnd/spacex-api.service';

@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {

  launches : Launches[];

  constructor(private spacexService : SpacexApiService) { }

  ngOnInit() {
    this.spacexService.getLaunches().subscribe(data => this.launches = data);
  }

}
