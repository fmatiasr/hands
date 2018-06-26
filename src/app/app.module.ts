import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CasesComponent } from './cases/cases.component';
import { CasesService } from './services/cases.service';
import { ProdutosService } from './services/produtos.service';
import { appRoutes } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    CasesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    CasesService,
    ProdutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
