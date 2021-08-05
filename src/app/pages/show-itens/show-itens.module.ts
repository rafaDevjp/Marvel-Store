import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowItensRoutingModule } from './show-itens-routing.module';
import { ShowItensComponent } from './show-itens.component';


@NgModule({
  declarations: [
    ShowItensComponent
  ],
  imports: [
    CommonModule,
    ShowItensRoutingModule
  ]
})
export class ShowItensModule { }
