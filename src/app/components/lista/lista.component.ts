import { Component, Input, OnInit } from '@angular/core';
import { Prioridade, Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  tarefas: Tarefa[] = [
    {
      descricao: "Lavar Louça",
      prioridade: Prioridade.media
    },
    {
      descricao: "Tomar banho",
      prioridade: Prioridade.alta
    },
    {
      descricao: "Tomar café",
      prioridade: Prioridade.alta
    },
    {
      descricao: "Colocar o lixo pra fora",
      prioridade: Prioridade.baixa
    },
    {
      descricao: "Ligar o PC",
      prioridade: Prioridade.alta
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
