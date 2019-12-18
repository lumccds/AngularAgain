export class Tarefas{
    constructor(
        public userId: number,
        public id: number,
        public title: string,
        public completed: boolean
    ){}
}