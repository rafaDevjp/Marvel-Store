import { Comics } from './../../models/comics';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataComics:Comics[] = []

	constructor(private dataService: DataService) { }

	ngOnInit(): void {
		
		this.listaComics()
	}

	listaComics() {
		this.dataService.getComics().subscribe(comics => {
			for (let iterator of comics) {
				this.dataComics.push(iterator)
				console.log(this.dataComics);
			}
			
		})
	}

	
}///
