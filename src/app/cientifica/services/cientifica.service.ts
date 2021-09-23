/**
*
* Serviço responsável por executar as operações da calculadora.
*
* @autor Leonardo Linard <linardleonardo@gmail.com>
* @since 1.0
*
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CientificaService {

  /* Definindo as constantes utilizadas
  para identificar as operações de cálculo. */
  static readonly ADICAO: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';
  static readonly RAIZ: string = 'raiz';
  static readonly QUAD: string = 'quad';
  static readonly CUBO: string = 'cubo';

  constructor() { }

  /**
   * Método de cálculo das operações matemáticas a partir
   * de dois números e uma operação.
   * Suporta as operações de adição, subtração, divisão e multiplicação.
   * 
   * @param num1 number
   * @param num2 number
   * @param operacao string (operação a ser executada)
   * @returns number (resultado da operação)
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CientificaService.ADICAO:
        resultado = num1 + num2;
        break;
      case CientificaService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CientificaService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CientificaService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }

  calcularSci(num1: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CientificaService.RAIZ:
        resultado = Math.sqrt(num1);
        break;
      case CientificaService.QUAD:
        resultado = Math.pow(num1, 2);
        break;
      case CientificaService.CUBO:
        resultado = Math.pow(num1, 3);
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }

}
