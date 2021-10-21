import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiserviceService } from '../services/apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class RouteresolverResolver implements Resolve<any> {
  constructor(private apiservice:ApiserviceService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.apiservice.getDetails();
  }
}
