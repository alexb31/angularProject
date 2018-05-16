import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../BackEnd/spacex-api.service';

@Component({
  selector   : 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls  : ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  companyInfo;

  constructor(private spacexService : SpacexApiService) { }

  ngOnInit() {
    this.spacexService.getCompanyInfo().subscribe(data => {this.companyInfo = data; console.log(data)});
  }

}
