import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/service/comics.service';

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
