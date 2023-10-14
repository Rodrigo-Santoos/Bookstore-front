import { Categoria } from './../categoria.model';
import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent {

  categorias: Categoria[] = [];

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros' ,'acoes'];

  constructor(private categoriaService: CategoriaService, private router: Router){}

  ngOnInit(): void{
    this.findAll(); //toda vez que a pagina for carregada vai chama esse metodo
  }

//-----------------------------------------------------------------------------------------------------

  //chamando o servico [Service] que tem o FindALL da Categoria
  findAll(){
    this.categoriaService.findAll().subscribe(resposta => {
      console.log(resposta);
      this.categorias = resposta;
    })
  }

//-----------------------------------------------------------------------------------------------------
  navegarParaCategoriaCreate(){
    this.router.navigate(["categorias/create"])
  }

}

