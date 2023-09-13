import type { IUser } from "$lib/models/auth"
import { Status } from "$lib/features/tasks/models/Status"
import { Priority } from "$lib/features/tasks/models/Priority"
import type { ISprint } from "$lib/models/sprint"

export interface IRequestTask {
  assigned_to: IUser[]
  created_by: IUser
  created_at: string
  deadline: string
  description: string
  estimated_timestamp: number
  finished_at: string
  id: string
  is_finish: boolean
  label: string
  priority_id: number
  project_id: number
  realized_timestamp: number
  sprint: ISprint
  status_id: number
  updated_at: string
  users: IUser[]
  parent?: IRequestTask
  subtasks?: Omit<IRequestTask, 'subtasks'>[]
}

export interface ITask {
  name: string
  id: string
  description: string
  status: Status
  assignees: IUser[]
  priority: Priority
  dueDate: Date
  createdBy: IUser
  timeSpent: number
  estimatedTime: number
  subtasks?: Omit<ITask, 'subtasks'>[]
  sprint?: ISprint
  parent?: ITask
}

export function taskFromRequest(task: IRequestTask): ITask {
  return {
    name: task.label,
    id: task.id,
    description: task.description,
    status: Status.fromId(task.status_id),
    assignees: task.users,
    priority: Priority.fromId(task.priority_id),
    dueDate: new Date(task.deadline),
    createdBy: task.created_by,
    timeSpent: task.realized_timestamp,
    estimatedTime: task.estimated_timestamp,
    subtasks: task.subtasks?.map(taskFromRequest),
    sprint: task.sprint,
    parent: task.parent && taskFromRequest(task.parent),
  }
}
