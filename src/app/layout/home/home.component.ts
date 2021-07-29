
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataComics:any[] = []

	constructor(private dataService: DataService) { }

	//Oninit unção que inicia os os métodos
	// logo quando o componete é chamado 
	ngOnInit(): void {
		this.listaComics()
	}	



	//Esta função recebe os valores vindo do serviço
	//como o objeto veio aninhado passei pelo forof para facilitara busca
	listaComics() {
		this.dataService.getComics().subscribe(comics => {
			for (let iterator of comics) {
				this.dataComics.push(iterator)
			}
			
		})
	}

	
}///
