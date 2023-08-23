<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte'
	import AddProjectCard from '$lib/features/sidebar/molecules/AddProjectCard.svelte'

	let showModalAddUser = false
</script>

{#if showModalAddUser}
	<AddProjectCard bind:showModalAddUser on:closeModal={() => (showModalAddUser = false)} />
{/if}
<div
	on:keydown
	on:click={() => (showModalAddUser = true)}
	class="flex items-center hover:bg-slate-200 cursor-pointer justify-between text-[.5em] font-medium p-2"
>
	<span>Ajouter un projet</span>
	<Icon icon="plus" class="text-[2em]" />
</div>
