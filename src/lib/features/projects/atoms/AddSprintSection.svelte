<script>
	import Icon from '$lib/components/atoms/Icon.svelte'
	import SprintFormPopIn from '$lib/features/sprints/SprintFormPopIn.svelte'

	let addSprintPopInIsOpen = false
</script>

<button
	class="btn btn-primary text-white btn-sm gap-2 mt-3"
	on:click={() => (addSprintPopInIsOpen = true)}
>
	<Icon icon="plus" color="white" />
	Ajouter un sprint
</button>
<SprintFormPopIn mode="create" bind:isOpen={addSprintPopInIsOpen} />
