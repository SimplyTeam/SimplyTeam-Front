import type { IWorkspace } from "$lib/models/workspace"
import { writable } from "svelte/store"

export const currentWorkspace = writable<IWorkspace | undefined>()