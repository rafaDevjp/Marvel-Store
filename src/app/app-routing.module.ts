import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './layout/master-page/master-page.component';


const routes: Routes = [
 

    {  
        path:"", 
       component: MasterPageComponent,
       children:[

        {
            path: '',
            loadChildren: () => import('./pages/character/character.module').then(m => m.CharacterModule)
        },
        {
            path: 'comics',
            loadChildren: () => import('./pages/comics/comics.module').then(m => m.ComicsModule)
        },
        {
            path: '',
            redirectTo: '',
            pathMatch: 'full'
        },

       ]
    },
    {
        path: 'show-itens/:id',
        loadChildren: () => import('./pages/show-itens/show-itens.module').then(m => m.ShowItensModule)
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
