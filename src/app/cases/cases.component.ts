import { Component, OnInit } from '@angular/core';

import { CasesService } from '../services/cases.service';
import { Case } from '../models/case.model';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  /**
   * Propriedade de lista de ICase
   */
  casesList: Case[];
  /**
   * Propriedade que seta a mensagem de erro
   */
  errorMessage = 'Erro ao chamar o servico';
  /**
   * Construtor da classe do component cases
   * @param _service Servicos para case
   */
  constructor(private _service: CasesService) { }
  /**
   * ngInit que ocorre antes do carregamento do component
   */
  ngOnInit() {
    this._service.getListCases()
    .subscribe(
      cases => {
        this.casesList = cases;
      },
      error => this.errorMessage = <any>error
    );
  }
}
