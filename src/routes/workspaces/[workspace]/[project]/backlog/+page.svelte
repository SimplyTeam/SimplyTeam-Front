<script lang="ts">
  import SimpleLayout from '$lib/components/layouts/SimpleLayout.svelte'
  import ProjectHeader from '$lib/features/projects/organisms/ProjectHeader.svelte'
  import Backlog from "$lib/features/projects/organisms/Backlog.svelte"
  import { backlogStore } from "$lib/stores/backlogStore"
</script>

<SimpleLayout>
    <ProjectHeader/>
    <Backlog tasks={$backlogStore.tasks}/>
</SimpleLayout>
