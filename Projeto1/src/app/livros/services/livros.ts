import { Injectable } from '@angular/core';
import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private livros: Livro[] = [];

  constructor() { }

  getLivros(): Livro[] {
    return this.livros;
  }

  adicionarLivro(livro: Livro): void {
    livro.id = this.livros.length + 1;
    this.livros.push(livro);
  }
}