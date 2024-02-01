export enum TaskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

export class Task{
    id: string
    title: string
    description: string
    status: TaskStatus
}

//Una entidad se utiliza para que podamos definir en ts que datos tiene  pero atravez de esta clase podriamos generar la tabla de nuestra base de datos.

//Esto esta relacionado con modulos ORM que leen estas clases y las transforman en tablas SQL

