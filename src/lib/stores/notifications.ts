import { writable, derived } from "svelte/store"

const DEFAULT_TIMEOUT = 3000

interface Notification {
  id: string
  type: "default" | "danger" | "warning" | "success" | "info"
  message: string
  timeout: number
}

function id() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

const createNotificationStore = () => {
  const _notifications = writable<Notification[]>([])

  function push(message: string, type: Notification["type"] = "default", timeout: number = DEFAULT_TIMEOUT) {
    _notifications.update(state => {
      return [...state, { id: id(), type, message, timeout }]
    })
  }

  const notifications = derived(_notifications, ($_notifications, set) => {
    set($_notifications)

    if ($_notifications.length > 0) {
      const timer = setTimeout(() => {
        _notifications.update(state => {
          state.shift()
          return state
        })
      }, $_notifications[0].timeout)

      return () => {
        clearTimeout(timer)
      }
    }
  })
  const { subscribe } = notifications

  return {
    subscribe,
    push,
    default: (message: string, timeout: number) => push(message, "default", timeout),
    danger: (message: string, timeout: number) => push(message, "danger", timeout),
    warning: (message: string, timeout: number) => push(message, "warning", timeout),
    info: (message: string, timeout: number) => push(message, "info", timeout),
    success: (message: string, timeout: number) => push(message, "success", timeout),
  }
}

export const notifications = createNotificationStore()