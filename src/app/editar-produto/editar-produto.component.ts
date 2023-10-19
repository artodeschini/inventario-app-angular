import { Component } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent {

  produto: Produto = new Produto();
  id: number;

  constructor(
    private produtoService: ProdutoService,
    private active: ActivatedRoute,
    private roteador: Router) {}

  ngOnInit() {
    this.id = this.active.snapshot.params['id'];
    this.produtoService.getProdutoById(this.id).subscribe(
      {
        next: (data) => this.produto = data,
        error: (e: any) => { console.log(e)}
      }
    );
  }

  onSubmit() {
    this.salvarProduto();
  }

  salvarProduto() {
    this.produtoService.editarProduto(this.id, this.produto).subscribe(
      {
        next: (data) => this.redirecionarListarProduto(),
        error: (e: any) => { console.log(e)}
      }
    );
  }

  redirecionarListarProduto() {
    this.roteador.navigate(['/produtos']); // rota definida em app-routing.module.ts
  }
}
