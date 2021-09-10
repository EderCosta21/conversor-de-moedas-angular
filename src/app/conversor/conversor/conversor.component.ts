import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Moeda, Conversao, ConversaoResponse } from '../models';
import { MoedaService, ConversorService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {

  public moedas: Moeda[];
  public conversao: Conversao;
  public possuiErro: boolean;
  public conversaoResponse: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(
    public moedaService: MoedaService,
    public conversorService: ConversorService) { }

  ngOnInit() {
    this.moedas = this.moedaService.listarTodas();
    console.log("Moedas", this.moedas);
    this.init();
  }

  /**
   * Efetua a chamada para a conversÃ£o dos valores.
   *
   * @return void
   */
  init(): void {
    this.conversao = new Conversao('USD', 'BRL', null);
    this.possuiErro = false;
  }

  /**
   * Efetua a chamada para a conversÃ£o dos valores.
   *
   * @return void
   */
  converter(): void {
    if (this.conversaoForm.form.valid) {
      this.conversorService.converter(this.conversao).subscribe(
        (response: any) => {
          console.log("Result converter", response);

          this.conversaoResponse = response;
        }, err => { this.possuiErro = true });
    }
  }

}