import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { WelcomeModule } from "./modules/welcome/welcome.module";
import { NavbarModule } from "./modules/navbar/navbar.module";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        WelcomeModule,
        NavbarModule,
        CommonModule
    ],
    providers:[

    ],
    bootstrap: [AppComponent]
})

export class AppModule {}