
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
    constructor(
        private active: ActivatedRoute,
        private dataService: DataService) { }

    ngOnInit(): void {
        const id = this.active.snapshot.paramMap.get('id') 
        console.log(id);
        this.dataService.getCimicsId(id).subscribe(data => {
            console.log(data)
            this.details = data
            console.log(this.details)});
        }
    
    buyList(){
            
    }

    adicionarComics(){
        this.quantidade ++
    }
    removeComics(){
        if(this.quantidade > 0)
        this.quantidade --;

    }

}
