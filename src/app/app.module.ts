import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {SkyhookDndModule} from '@angular-skyhook/core';
// import {default as MultiBackend} from '@angular-skyhook/multi-backend';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {GameService} from './services/game.service';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SkyhookDndModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        GameService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
