import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvionsComponent } from './avions/avions.component';
import { AddAvionComponent } from './add-avion/add-avion.component';
import { FormsModule } from '@angular/forms';
import { UpdateAvionComponent } from './update-avion/update-avion.component';
import { RechercheParCompanyComponent } from './recherche-par-company/recherche-par-company.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {TokenInterceptor} from "./services/token.interceptor";
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { AddRoleToUserComponent } from './add-role-to-user/add-role-to-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AvionsComponent,
    AddAvionComponent,
    UpdateAvionComponent,
    RechercheParCompanyComponent,
    RechercheParNomComponent,
    LoginComponent,
    ForbiddenComponent,
    UsersComponent,
    AddUsersComponent,
    AddRoleToUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
