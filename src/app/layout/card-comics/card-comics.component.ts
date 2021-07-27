import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-comics',
  templateUrl: './card-comics.component.html',
  styleUrls: ['./card-comics.component.scss']
})
export class CardComicsComponent implements OnInit {

@Input()itemComics: any;
res: any = []=[]
constructor() { }

  ngOnInit(): void {

    for (let iterator of this.itemComics) {
            this.res.push(iterator)
            console.log(this.res);
            

    }
     
  }

}
