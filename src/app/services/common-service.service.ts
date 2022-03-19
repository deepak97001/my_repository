import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private readonly http: HttpClient) { }

  getFacts(): Observable<string[]>{
   return this.http.get<any>('https://api.aakhilv.me/fun/facts', {params: {num: 30}});
  }
}
