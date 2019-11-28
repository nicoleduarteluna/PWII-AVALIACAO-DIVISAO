import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'; 
import { OperacaoAPIServiceService } from '../service/operacao-apiservice.service';
import { stringify } from '@angular/core/src/render3/util';
import { Observable } from 'rxjs';


@Component({
  selector: 'has-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit {
  formOperacao: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private service: OperacaoAPIServiceService) { }

  ngOnInit() {
    this.formOperacao = this.formBuilder.group ({
      num1: this.formBuilder.control(''), 
      num2: this.formBuilder.control('')  
    })
  }

  onProcessar  () {
    let num1 : string = this.formOperacao.value.num1;
    let num2 : string = this.formOperacao.value.num2;
    this.service.getOperacao(num1,num2)
                .subscribe ((data:string) => alert (data));
  }

}
