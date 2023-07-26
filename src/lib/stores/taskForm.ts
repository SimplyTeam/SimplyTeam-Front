import { derived, writable } from "svelte/store"
import type { ITask } from "$lib/models/task"
import type { IUser } from "$lib/models/auth"
import { Priority } from "$lib/features/tasks/models/Priority"
import { Status } from "$lib/features/tasks/models/Status"

interface TaskForm {
  id?: string
  name: string
  priority: Priority
  assignedTo: IUser[]
  status: Status
  dueDate: Date
  estimatedTime?: number
  completedTime?: number
  createdBy?: IUser
  description: string
  comments: string[]
  sprintId?: number
}

interface TaskFormState {
  mode?: 'create' | 'edit'
  workspaceId?: string
  projectId?: string
  sprintId?: string
  task?: TaskForm
}

const defaultTaskForm: TaskForm = {
  name: "",
  priority: Priority.Normal,
  assignedTo: [],
  status: Status.Todo,
  dueDate: new Date(),
  estimatedTime: 0,
  completedTime: 0,
  description: "",
  comments: [],
  sprintId: 0,
}

function createTaskFormStore() {
  const { subscribe, set, update } = writable<TaskFormState>({
    mode: undefined,
    task: defaultTaskForm
  })

  return {
    set,
    subscribe,
    openCreateTaskForm: (workspaceId: string, projectId: string, sprintId: string, task?: Partial<ITask>) => set(({
      task: {
        ...defaultTaskForm,
        ...task
      },
      projectId,
      workspaceId,
      sprintId,
      mode: 'create'
    })),
    openEditTaskForm: (workspaceId: string, projectId: string, sprintId: string, task: ITask) => set({
      mode: 'edit',
      projectId,
      workspaceId,
      sprintId,
      task: {
        id: task.id,
        name: task.name,
        priority: task.priority,
        assignedTo: task.assignees,
        status: task.status,
        dueDate: task.dueDate,
        createdBy: task.createdBy,
        description: task.description,
        comments: [],
        sprintId: task.sprintId,
      }
    }),
    close: () => update((state) => ({
      task: state.mode === "edit" ? defaultTaskForm : state.task,
      mode: undefined
    })),
  }
}

export const taskForm = createTaskFormStore()

export const taskFormIsOpen = derived(taskForm, ($taskForm) => !!$taskForm.mode)