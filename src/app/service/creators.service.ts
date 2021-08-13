import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CreatorsService {

	//Valores das chaves da API  da Marvel
	//Aqui eu dividi em fraguimentos para melhor definição e para facilitar a busca por ID

	HASH = '82f2eb84d1df6a077ce44033e0645474'

	PUBLIC_KEY = '5532f1c7120127dc761d91cffc6aec80'

	TIMESTAMP = '1627338801875'

	URL_BASE = 'https://gateway.marvel.com:443/v1/public/creators'



	constructor(private http:HttpClient) { }

	getCreators(): Observable<any[]>{
		const URL = `${this.URL_BASE}${this.TIMESTAMP}`;
		return this.http.get<any[]>(URL) 
	}






}
