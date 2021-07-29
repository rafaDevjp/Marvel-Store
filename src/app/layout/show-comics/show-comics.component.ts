
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
    selector: 'app-show-comics',
    templateUrl: './show-comics.component.html',
    styleUrls: ['./show-comics.component.scss']
})
export class ShowComicsComponent implements OnInit {
    details:any;
    quantidade:number = 0;



    //Aqui é conhecida injeção de dependência 
    constructor(
        private active: ActivatedRoute,
        private dataService: DataService) { }


        //Função ngOninit inicializando os metodos doservice dataService e chamando
        //os dados refenrentes ao ID recebido pelo método get('id')
    ngOnInit(): void {
        const id = this.active.snapshot.paramMap.get('id') 
        console.log(id);
        this.dataService.getCimicsId(id).subscribe(data => {
            console.log(data)
            this.details = data
            console.log(this.details)});
        }
    
    buyList(){
        //Função de compra     
    }
   

    // essas duas dunções representam as as funcinalidades dos seletores na pagina Show-comics

    // A cada clique no botão ( + )... Esta função soma quantidade + 1, i
    adicionarComics(){
        this.quantidade ++
    }
    //A cadad clicque no botão ( - )...  esta funçao elimina um valor, mas só se for maior que zero
    removeComics(){
        if(this.quantidade > 0)
        this.quantidade --;

    }

}
