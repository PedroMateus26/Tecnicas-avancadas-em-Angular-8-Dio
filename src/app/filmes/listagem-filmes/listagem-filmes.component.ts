import { ConfigParams } from './../../shared/models/config-params';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Filme } from 'src/app/shared/models/filme';
import { FilmesService } from './../../core/filmes.service';
import { Component, OnInit } from '@angular/core';
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  readonly semFoto="https://lh3.googleusercontent.com/proxy/-3S4zjoVuZqkW6ltUR2BmioYOOsHQl7IJ-8C3zpVNaDlWD9iAAchJmba4eTiwByLzBm-1afrylP_Kl5YFCv3qhayB5jJEalGQ8aQDre-KRLwOkQBNE_Uvt9drqW7jFoe54-L-blMIUqCBa6iUYTdKfN5qzFNroyBt5Sd2Pq73877w42pc7_E"
  config:ConfigParams={
    pagina:0,
    limite:4
  };
  filmes:Filme[]=[];
  filtrosListagem:FormGroup;
  generos:Array<string>

  constructor(private filmeService:FilmesService,private fb:FormBuilder) {}

  
  ngOnInit():void {
    this.filtrosListagem=this.fb.group({
      texto:[""],
      genero:[""]
    })

    this.filtrosListagem.get("texto").valueChanges
    .pipe(debounceTime(500))
    .subscribe(val=>{
      this.config.pesquisa=val;
      this.resetarConsulta();
    });
    this.filtrosListagem.get("genero").valueChanges.subscribe(val=>{
      this.config.campo={tipo:"genero",valor:val};
      this.resetarConsulta();
    });
    this.generos = ["Ação", "Romance", "Aventura", "Terror", "Ficção Cientifica", "Comédia", "Drama"];
    this.listarFilmes();
  }

  onScroll():void{
    this.listarFilmes();
  
  }

  private listarFilmes():void{
    this.config.pagina++;
    this.filmeService.listar(this.config)
    .subscribe((filmes:Filme[])=>this.filmes.push(...filmes))
    
  }

  private resetarConsulta():void{
    this.config.pagina=0
    this.filmes=[];
    this.listarFilmes();
  }

}
