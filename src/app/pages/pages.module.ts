import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatorsComponent } from './creators/creators.component';
import { EventsComponent } from './events/events.component';
import { StoriesComponent } from './stories/stories.component';



@NgModule({
  declarations: [
    CharactersComponent,
    ComicsComponent,
    CreatorsComponent,
    EventsComponent,
    StoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
