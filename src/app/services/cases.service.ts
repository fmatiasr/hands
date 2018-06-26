import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ICase } from '../model/case.model';
/**
 * Classe dos servicos do Cases
 */
@Injectable({
  providedIn: 'root'
})
export class CasesService {
  /**
   * Url da API de produtos
   */
  caseUrl = 'http://localhost:53805/case/';
  /**
   * Construtor da classe de servicos de cases
   * @param _http
   */
  constructor(private _http: HttpClient) { }
   /**
   * Pega lista de Cases
   */
  getListCases(): Observable<ICase[]> {
    return this._http.get<ICase[]>(this.caseUrl + 'listar')
    .do(data => console.log('All: ' + JSON.stringify(data)))
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
