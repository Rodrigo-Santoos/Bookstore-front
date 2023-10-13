import { Categoria } from './../categoria.model';
import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent {

  categorias: Categoria[] = [];

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros' ,'acoes'];

  constructor(private categoriaService: CategoriaService){}

  ngOnInit(): void{
    this.findAll(); //toda vez que a pagina for carregada vai chama esse metodo
  }

//-----------------------------------------------------------------------------------------------------

  //chamando o servico que tem o FindALL da Categoria
  findAll(){
    this.categoriaService.findAll().subscribe(resposta => {
      console.log(resposta);
      this.categorias = resposta;
    })
  }

}

