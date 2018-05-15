import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from './BackEnd/spacex-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private spacexService: SpacexApiService) {

  }

  ngOnInit(): void {
    this.spacexService.getCompanyInfo()
                      .subscribe(data =>
                      console.log(JSON.stringify(data)));
  }
}
