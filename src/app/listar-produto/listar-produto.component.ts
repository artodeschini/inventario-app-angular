import { Component } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent {

  produtos: Produto[];

  constructor(private produtoService: ProdutoService) {}

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
}
