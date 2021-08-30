import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaixaInputComponent } from './components/caixa-input/caixa-input.component';
import { ListaComponent } from './components/lista/lista.component';
import { TextoComponent } from './components/texto/texto.component';

@NgModule({
  declarations: [
    AppComponent,
    CaixaInputComponent,
    ListaComponent,
    TextoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
