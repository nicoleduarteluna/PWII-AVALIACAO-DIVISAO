import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperacaoAPIServiceService {
  url: string = "http://172.16.58.22:8001/api";
  constructor( private httpClient: HttpClient ) { }

  getOperacao(num1:string, num2:string): Observable <string> {
      return this.httpClient.get<string>(`${this.url}/funcoes/divisao/${num1}/${num2}`)
  }
}
