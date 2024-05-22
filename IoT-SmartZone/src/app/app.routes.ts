import { Routes } from '@angular/router';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { NavbarComponent } from './modules/navbar/navbar.component';

export const routes: Routes = [
    {
        path:'',
        children:[
            {
              path:'',
              redirectTo:'welcome',
              pathMatch:'full'
            },
            {
                path:'welcome',
                pathMatch: 'full',
                component: WelcomeComponent,
                loadChildren: ()=> import('./modules/welcome/welcome.module').then(m => m.WelcomeModule)
            }
        ]
    }
];
