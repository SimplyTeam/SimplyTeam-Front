<script lang="ts">
  import SimpleLayout from '$lib/components/layouts/SimpleLayout.svelte'
  import AddSprintSection from '$lib/features/projects/atoms/AddSprintSection.svelte'
  import ProjectHeader from '$lib/features/projects/organisms/ProjectHeader.svelte'
  import SprintsList from '$lib/features/projects/organisms/SprintsList.svelte'
  import { sprintsStore } from "$lib/stores/sprintsStore"
</script>

<SimpleLayout>
  <ProjectHeader/>
  <div class="w-full h-[1px] my-2 bg-black"/>
  <AddSprintSection/>
  <SprintsList sprints={$sprintsStore.sprints}/>
</SimpleLayout>
