import { Characters } from './../../models/characters';
import { CharactersService } from './../../service/characters.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
 
   charactersList: any;
  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {

    this.charactersService.getChar().subscribe(rest => {
      this.charactersList = rest
      console.log(this.charactersList);
      
    })
  }

}
