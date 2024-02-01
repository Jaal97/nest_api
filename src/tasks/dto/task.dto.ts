import { TaskStatus } from "../task.entity"


export class CreateTaskDto{
    title: string
    description: string
    status: TaskStatus
}


export class updateTaskDto{
    title?: string
    description?: string
    status?: TaskStatus
}