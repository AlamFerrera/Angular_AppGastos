import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  presupuesto:number;
  restante:number;
  listaGasto:any[] = [];

  constructor(private service:PresupuestoService) {
    this.presupuesto = 0;
    this.restante = 0;

    this.subscription = this.service.getGastos().subscribe({
      next: (data) =>{
        this.restante = this.restante - data.cantidad;
        this.listaGasto.push(data);
      },
      error: (e) => console.log(e)      
    });
  }

  ngOnInit(): void {
    this.presupuesto = this.service.presupuesto;
    this.restante = this.service.restante;
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  aplicarColorRestante(){
    if(this.presupuesto / 4 > this.restante){
      return 'alert alert-danger';
    }
    else if(this.presupuesto / 2 > this.restante){
      return 'alert alert-warning';
    }
    else{
      return 'alert alert-secondary';
    }
  }

}
