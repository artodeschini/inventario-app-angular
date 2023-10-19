import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent {

  produto: Produto = new Produto();

  constructor(private produtoService: ProdutoService, private reteador: Router) {}

  onSubmit() {
    this.salvarProduto();
  }

  salvarProduto() {
    this.produtoService.addProduto(this.produto).subscribe(
      {
        next: (data) => {
          this.redirecionarListarProdutos();
        },
        error: (error:any) => {
          console.log(error);
        }
      }
    );
  }

  redirecionarListarProdutos() {
    this.reteador.navigate(["/produtos"]);
  }
}
