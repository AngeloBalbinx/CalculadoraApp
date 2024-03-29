import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  operandoA:number;
  operandoB:number;

  @Output() resultadoSuma = new EventEmitter<number>();
  @Output() resultadoResta = new EventEmitter<number>();
  @Output() resultadoMultiplicacion= new EventEmitter<number>();
  @Output() resultadoDivision = new EventEmitter<number>();

  sumar():void{
    let resultado = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(resultado);
  }
  restar():void{
    let resultado = this.operandoA - this.operandoB;
    this.resultadoSuma.emit(resultado);
  }
  multiplicar():void{
    let resultado = this.operandoA * this.operandoB;
    this.resultadoSuma.emit(resultado);
  }
  dividir():void{
    let resultado = this.operandoA / this.operandoB;
    this.resultadoSuma.emit(resultado);
  }
  
}
