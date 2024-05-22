import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { WelcomeModule } from "./modules/welcome/welcome.module";
import { NavbarModule } from "./modules/navbar/navbar.module";
import { NavbarComponent } from "./modules/navbar/navbar.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        WelcomeModule,
        NavbarComponent
    ],
    providers:[

    ],
})

export class AppModule {}