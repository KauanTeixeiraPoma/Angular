import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Livro } from '../models/livro';
import { LivrosService } from '../services/livros';

@Component({
  selector: 'app-cad-livros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cad-livros.html',
  styleUrls: ['./cad-livros.scss']
})
export class CadLivrosComponent {
  novoLivro: Livro = { titulo: '', autor: '', ano: 0 };

  constructor(private livrosService: LivrosService) {}

  salvar() {
    this.livrosService.adicionarLivro(this.novoLivro);
    alert('Livro salvo com sucesso!');
    this.novoLivro = { titulo: '', autor: '', ano: 0 };
  }
}