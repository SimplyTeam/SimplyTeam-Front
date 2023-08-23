import { sprintsStore } from "$lib/stores/sprintsStore"
import { backlogStore } from "$lib/stores/backlogStore"
import type { LayoutLoad } from './$types'

export const load = (({ params }) => {
  sprintsStore.fetchSprintsByProjectId(params.workspace, params.project)
  backlogStore.fetchBacklogTasksByProjectId(params.workspace, params.project)
}) satisfies LayoutLoad
