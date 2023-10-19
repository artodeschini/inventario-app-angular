import { Component } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent {

  produtos: Produto[];

  constructor(private produtoService: ProdutoService, private roteador: Router) {}

  ngOnInit() {
    this.getProdutos();
  }

  private getProdutos() {
    this.produtoService.getListaProdutos().subscribe(
      (data => {
        this.produtos = data;
      })
    );
  }

  editarProduto(id: number) {
    this.roteador.navigate(['editar-produto', id]);
  }

  deletarProduto(id: number) {
    this.produtoService.deleteProdutoById(id).subscribe(
      {
        next: (data) => this.getProdutos(), // atualiza a lista de produtos
        error: (e) => { console.log(e) }
      }
    );
  }
}
