<script>
	import Icon from '$lib/components/atoms/Icon.svelte'
	import AddSprintPopIn from "$lib/features/sprints/AddSprintPopIn.svelte"

	let addSprintPopInIsOpen = false
</script>

<button class="btn btn-primary btn-sm gap-2" on:click={() => addSprintPopInIsOpen = true}>
	<Icon icon="plus" color="white" />
	Ajouter un sprint
</button>
<AddSprintPopIn bind:isOpen={addSprintPopInIsOpen} />
