import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduto } from '../interfaces/produto.interface';
/**
 * Classe dos servicos de Produtos
 */
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  /**
   * Url da API de produtos
   */
  produtosUrl = 'http://localhost:53805/produto/';
  /**
   * Construtor da classe de servicos de produtos
   * @param _http
   */
  constructor(private _http: HttpClient) { }
  /**
   * Pega lista de produtos.
   */
  getListProduct(): Observable<IProduto[]> {
    return this._http.get<IProduto[]>(this.produtosUrl + 'listar/')
    .catch(this.handleError);
  }
  /**
   * Tratamento de erro
   * @param err
   */
  private handleError(err: HttpErrorResponse) {
    console.log();
    return Observable.throw(err.message);
  }
}
