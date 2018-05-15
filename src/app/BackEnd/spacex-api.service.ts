import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { CompanyInfo } from '../Models/CompanyInfo';
import { Launch } from '../Models/launch';
import { Launchpad } from '../Models/launchpad';
import { CapPart } from '../Models/capPart';
import { CorePart } from '../Models/corePart';
import { CoreOptions } from '../Models/coreOptions';
import { CapOptions } from '../Models/capOptions';
import { Capsule } from '../Models/capsule';
import { Rocket } from '../Models/rocket';
import { LaunchOptions } from '../Models/launchOptions';
import { URLSearchParams } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  baseUrl = 'https://api.spacexdata.com/v2';

  constructor(private restClient: HttpClient) { }


  // Launches
  getCompanyInfo(): Observable<CompanyInfo> {
    const requestEndpoint = this.baseUrl + '/info';
    return this.restClient.get<CompanyInfo>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  getLatestLaunches(): Observable<Launch> {
    const requestEndpoint = this.baseUrl + '/launches/latest';
    return this.restClient.get<Launch>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  getPastLaunches(): Observable<Launch> {
    const requestEndpoint = this.baseUrl + '/launches';
    return this.restClient.get<Launch>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  getUpcomingLaunches(): Observable<Launch> {
    const requestEndpoint = this.baseUrl + '/launches/upcoming';
    return this.restClient.get<Launch>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  getLaunches(options: LaunchOptions): Observable<Launch> {
    let params = new URLSearchParams();
    for(let key in options){
      params.set(key, options[key]);
    }
    const requestEndpoint = this.baseUrl + '/launches?' + params.toString();
    return this.restClient.get<Launch>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  // Capsule Data
  getCapsuleData(name = ''): Observable<Capsule> {
    if ( name != '' ){
      name = '/' + name;
    }
    const requestEndpoint = this.baseUrl + '/capsules' + name;
    return this.restClient.get<Capsule>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  // Rocket Data
  getRocketData(name = ''): Observable<Rocket> {
    if ( name != '' ){
      name = '/' + name;
    }
    const requestEndpoint = this.baseUrl + '/rockets' + name;
    return this.restClient.get<Rocket>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  // launchpad  Data
  getLaunchpadData(name = ''): Observable<Launchpad> {
    if ( name != '' ){
      name = '/' + name;
    }
    const requestEndpoint = this.baseUrl + '/launchpads' + name;
    return this.restClient.get<Launchpad>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  // Core Data
  getCoreData(name = ''): Observable<CorePart> {
    if ( name != '' ){
      name = '/' + name;
    }
    const requestEndpoint = this.baseUrl + '/parts/cores' + name;
    return this.restClient.get<CorePart>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  getCoreSearch(options: CoreOptions): Observable<CorePart> {
    let params = new URLSearchParams();
    for(let key in options){
      params.set(key, options[key]);
    }
    const requestEndpoint = this.baseUrl + '/parts/cores?' + params.toString();
    return this.restClient.get<CorePart>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }


  // Caps Data
  getCapData(name = ''): Observable<CapPart> {
    if ( name != '' ){
      name = '/' + name;
    }
    const requestEndpoint = this.baseUrl + '/parts/caps' + name;
    return this.restClient.get<CapPart>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  getCapearch(options: CapOptions): Observable<CapPart> {
    let params = new URLSearchParams();
    for(let key in options){
      params.set(key, options[key]);
    }
    const requestEndpoint = this.baseUrl + '/parts/caps?' + params.toString();
    return this.restClient.get<CapPart>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
