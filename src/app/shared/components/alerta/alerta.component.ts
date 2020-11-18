import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Alerta } from '../../models/alerta';

@Component({
  selector: 'dio-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {

  alerta={
  titulo:"Sucesso!!!",
  descricao:"Seu registro foi realizado com sucesso!",
  btnSucesso:"OK",
  btnCancelar:"Cancelar",
  possuirBtnFechar:false,
  corBtnSucesso:"accent",
  corBtnCancelar:"warn"
}as Alerta;
  
  constructor(public dialogRef: MatDialogRef<AlertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alerta) { }

  ngOnInit() {
    if(this.data){
      this.alerta.titulo=this.data.titulo || this.alerta.titulo;
      this.alerta.descricao=this.data.descricao || this.alerta.descricao;
      this.alerta.btnCancelar=this.data.btnCancelar ||this.alerta.btnCancelar;
      this.alerta.btnSucesso=this.data.btnSucesso || this.alerta.btnSucesso;
      this.alerta.corBtnSucesso=this.data.corBtnSucesso || this.alerta.corBtnSucesso;
      this.alerta.corBtnCancelar=this.data.corBtnCancelar || this.alerta.corBtnCancelar;
      this.alerta.possuirBtnFechar=this.data.possuirBtnFechar || this.alerta.possuirBtnFechar;

    }
  }

}