import { Component, OnInit } from '@angular/core';

import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../models/produto.model';
/**
 * Classe do component de Produtos
 */
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  /**
   * Propriedade de lista de IProduto
   */
  produtosList: Produto[];
  /**
   * Propriedade que seta a mensagem de erro
   */
  errorMessage = 'Erro ao chamar o servico';
  /**
   * Construtor da classe do component de produtos
   * @param _service injecao de dependencia de produtos services
   */
  constructor(private _service: ProdutosService) { }
  /**
   * ngInit que ocorre antes do carregamento do component
   */
  ngOnInit() {
    this._service.getListProduct()
    .subscribe(
      produtos => {
        this.produtosList = produtos;
      },
      error => this.errorMessage = <any>error
    );
  }
}
