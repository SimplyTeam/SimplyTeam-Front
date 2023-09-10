<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte'
</script>

<a
	href="profil/plan"
	on:click
	aria-hidden="true"
	class="card flex justify-center min-h-[10rem] text-center mr-10 my-6 w-3/4 md:w-1/4 card-workspace bg-secondary border-2 shadow-md text-white"
>
	<div class="card-body">
		<Icon icon="crown" color="info" size="4xl" />
		<p class="font-bold text-xl whitespace-pre-wrap">Créer des espaces en illimité avec le plan premium</p>
	</div>
</a>

<style>
	.card-workspace {
		transform: scale(1);
		transition: all 0.2s ease-out;
	}

	.card-workspace:hover {
		box-shadow: 0 4px 4px rgba(142, 110, 202, 0.36);
		transform: scale(1.025);
		cursor: pointer;
	}
</style>
