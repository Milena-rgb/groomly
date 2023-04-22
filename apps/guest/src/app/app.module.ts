import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GuestHttpService } from './guest-area/service';

@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {initialNavigation: "enabledBlocking"}),
        FormsModule,
      HttpClientModule
    ],
  providers: [GuestHttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
