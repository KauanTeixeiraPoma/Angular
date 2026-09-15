import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadLivrosComponent } from './livros/cad-livros/cad-livros';
import { ListagemComponent } from './livros/listagem/listagem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CadLivrosComponent, ListagemComponent, CurrencyPipe, FormsModule],
  templateUrl: './app.html'
})
export class App {
  title = 'Projeto1';

  nome = 'Carlos';
  idade = 25;
  curso = 'Sistemas de Informação';

  produto = 'Teclado';
  preco = 150;
  quantidade = 3;

  imagemProduto = 'https://picsum.photos/id/24/150/150';
  descricaoImagem = 'Livro aberto sob a mesa';

  formularioValido = false;

  contador = 0;

  nomeUsuario = 'Thiago';

  produtoCad = 'Mouse Gamer';
  precoCad = 150;
  quantidadeCad = 2;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    if (this.contador > 0) {
      this.contador--;
    }
  }
}