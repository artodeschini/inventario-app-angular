import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private urlBase = "http://localhost:8080/inventario-app/produtos";

  constructor(private clienteHttp: HttpClient) { }

  getListaProdutos():Observable<Produto[]> {
    return this.clienteHttp.get<Produto[]>(this.urlBase);
  }

  addProduto(produto: Produto):Observable<Object> {
    return this.clienteHttp.post(this.urlBase, produto);
  }

  getProdutoById(id: number) {
    return this.clienteHttp.get<Produto>(`${this.urlBase}/${id}`);
  }

  editarProduto(id: number, produto: Produto) {
    return this.clienteHttp.put(`${this.urlBase}/${id}`, produto);
  }

  deleteProdutoById(id: number) {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
}
