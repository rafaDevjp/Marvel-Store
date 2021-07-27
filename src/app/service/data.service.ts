import { Comics } from './../models/comics';
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import  {map} from'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  hash = '82f2eb84d1df6a077ce44033e0645474'

  PUBLIC_KEY = '5532f1c7120127dc761d91cffc6aec80'

  TIMESTAMP = '1627338801875'

  URL = `http://gateway.marvel.com/v1/public/comics?ts=${this.TIMESTAMP}&apikey=${this.PUBLIC_KEY}&hash=${this.hash}`

  constructor(private http: HttpClient) { }


  getComics(): Observable<Comics[]>{
    return this.http.get<any>(this.URL)
    .pipe(map((data: any) => data.data.results))
  }







  
}//END CLASS


