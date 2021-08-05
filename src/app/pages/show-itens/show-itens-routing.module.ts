import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowItensComponent } from './show-itens.component';

const routes: Routes = [{ path: '', component: ShowItensComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowItensRoutingModule { }
