import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../models/livro';
import { LivrosService } from '../services/livros';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listagem.html',
  styleUrls: ['./listagem.scss']
})
export class ListagemComponent implements OnInit {
  listaDeLivros: Livro[] = [];

  constructor(private livrosService: LivrosService) {}

  ngOnInit() {
    this.listaDeLivros = this.livrosService.getLivros();
  }
}