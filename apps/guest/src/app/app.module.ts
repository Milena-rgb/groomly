import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GuestHttpService } from './guest-area/service';
import { NgxsModule, NgxsModuleOptions } from '@ngxs/store';
import { environment } from '../environments/environments';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsLoggerPluginModule, NgxsLoggerPluginOptions } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const ngxsConfig: NgxsModuleOptions = {
  developmentMode: !environment.production,
};

export const ngxsLoggerConfig: NgxsLoggerPluginOptions = {
  disabled: environment.production
};

@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxsModule.forRoot([], ngxsConfig),
        NgxsSelectSnapshotModule.forRoot(),
        NgxsFormPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot(ngxsLoggerConfig),
        NgxsRouterPluginModule.forRoot(),
        RouterModule.forRoot(appRoutes, {initialNavigation: "enabledBlocking"}),
        FormsModule,
        HttpClientModule
    ],
  providers: [GuestHttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
