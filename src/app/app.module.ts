import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { AdicionarProdutoComponent } from './adicionar-produto/adicionar-produto.component';
import { FormsModule } from '@angular/forms';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProdutoComponent,
    AdicionarProdutoComponent,
    EditarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
