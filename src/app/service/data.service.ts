import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs';
import  {map} from'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  HASH = '82f2eb84d1df6a077ce44033e0645474'

  PUBLIC_KEY = '5532f1c7120127dc761d91cffc6aec80'

  TIMESTAMP = '1627338801875'

  URL_BASE = `http://gateway.marvel.com/v1/public/comics`

  AUTHETICATION_KEY = `?ts=${this.TIMESTAMP}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`

  

  constructor(private http: HttpClient) { }

//
  getComics(): Observable<any[]>{
    const url = `${this.URL_BASE}${this.AUTHETICATION_KEY}`
    return this.http.get<any>(url)
    .pipe(map((data: any) => data.data.results))
  }
//
  getCimicsId(id:any): Observable<any>{
    const url = `${this.URL_BASE}/${id}${this.AUTHETICATION_KEY}`
    return this.http.get<any>(url)
    .pipe(map((data: any) => data.data.results))
  }

}//END CLASS


