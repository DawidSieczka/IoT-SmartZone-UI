import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'welcome',
                pathMatch: 'full'
            },
            {
                path: 'welcome',
                pathMatch: 'full',
                component: WelcomeComponent,
                loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule)
            }
        ]
    }
];
@NgModule({
    providers: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
