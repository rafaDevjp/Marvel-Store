import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/service/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  
  charactersList: any;
  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {

    this.charactersService.getChar().subscribe(rest => {
      this.charactersList = rest
      console.log(this.charactersList);
      
    })
  }
}
