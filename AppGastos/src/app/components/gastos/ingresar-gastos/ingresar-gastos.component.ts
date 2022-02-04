import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrls: ['./ingresar-gastos.component.css']
})
export class IngresarGastosComponent implements OnInit {
  nombreGasto:string;
  cantidad:number;
  formularioIncorrecto:boolean;
  textIncorrecto:string;

  constructor(private service:PresupuestoService) {
      this.nombreGasto = '';
      this.cantidad = 0;
      this.formularioIncorrecto = false;
      this.textIncorrecto = 'Nombre gasto o cantidad incorrecta';
  }

  ngOnInit(): void {
  }

  
  agregarGasto(){
      if(this.cantidad > this.service.restante){
        this.formularioIncorrecto = true;
        this.textIncorrecto = 'La cantidad ingresada es mayor al restante';
        return;
      }  
      if(this.nombreGasto == '' || this.cantidad <= 0){
        this.formularioIncorrecto = true;
        return;
      }
      else{
        //creacion de objeto
        const GASTO = {
          nombre : this.nombreGasto,
          cantidad: this.cantidad
        };

        //Envio mediante subject a los suscriptores
        this.service.agregarGasto(GASTO);
        
        //reseteo del formulario
        this.formularioIncorrecto = false;
        this.nombreGasto = '';
        this.cantidad = 0;
      }
  }

}
