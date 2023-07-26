import { sprintsStore } from "$lib/stores/sprintsStore"
import type { LayoutLoad } from './$types'

export const load = (({ params }) => {
  sprintsStore.fetchSprintsByProjectId(params.workspace, params.project)
}) satisfies LayoutLoad
