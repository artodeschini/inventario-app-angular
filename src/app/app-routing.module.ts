import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { AdicionarProdutoComponent } from './adicionar-produto/adicionar-produto.component';

const routes: Routes = [
  {path: 'produtos', component: ListarProdutoComponent },
  {path: '', redirectTo: 'produtos', pathMatch: 'full' },
  {path: 'adicionar-produto', component: AdicionarProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
