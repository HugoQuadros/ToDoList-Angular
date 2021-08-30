export interface Tarefa {
    descricao: string,
    prioridade: Prioridade
}

export enum Prioridade{
    "baixa" = 1,
    "media",
    "alta"
}