import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/character/character.module').then(m => m.CharacterModule)
    },
    {
        path: 'comics',
        loadChildren: () => import('./pages/comics/comics.module').then(m => m.ComicsModule)
    },
    {
        path: 'show-itens/:id',
        loadChildren: () => import('./pages/show-itens/show-itens.module').then(m => m.ShowItensModule)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },


]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
