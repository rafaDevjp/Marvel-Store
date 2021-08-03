import { ComicsService } from './../../service/comics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
   comicsList:any;
  constructor(private comicsSrvice: ComicsService) { }

  ngOnInit(): void {
    this.comicsSrvice.getComics().subscribe( res =>{
      this.comicsList = res
    })
  }

}
