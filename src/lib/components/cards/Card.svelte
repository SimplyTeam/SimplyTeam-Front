<script lang="ts">
	import Icon from '../Icon.svelte'
	function modalAddWorkspace() {
		return alert('Add workspace')
	}
</script>

<div
	on:click={() => {
		modalAddWorkspace()
	}}
	aria-hidden="true"
	class="card flex justify-center text-center mr-6 my-6 w-1/4 card-workspace bg-white border-primary border-2 shadow-md text-neutral-content"
>
	<div class="card-body">
		<Icon icon="plus-circle" color="accent" size="4xl" />
		<p class="text-primary font-bold text-xl whitespace-pre-wrap">Créer un espace de travail</p>
	</div>
</div>

<style>
	.card-workspace {
		transform: scale(1);
		transition: all 0.2s ease-out;
	}

	.card-workspace:hover {
		box-shadow: 0px 4px 4px rgba(142, 110, 202, 0.36);
		transform: scale(1.025);
		cursor: pointer;
	}
</style>
