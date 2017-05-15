import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseProvider } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';

export const firebaseConfig = {
    apiKey: "AIzaSyBSNSbaUW7xzy1rTRY7jTOU7zLZ369VhbI",
    authDomain: "kazzhing-9f1d1.firebaseapp.com",
    databaseURL: "https://kazzhing-9f1d1.firebaseio.com",
    storageBucket: "kazzhing-9f1d1.appspot.com",
    messagingSenderId: "458234522468"
}
const appRoutes: Routes = [
  {path: '', component:AppComponent},
  {path: 'add-discount',component:AddDiscountComponent},
  {path: 'login',component:LoginComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddDiscountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
