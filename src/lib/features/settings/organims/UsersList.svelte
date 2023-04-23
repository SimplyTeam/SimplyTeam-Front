<script lang="ts">
	import { currentWorkspace } from '$lib/stores/workspace'
	import Button from '$lib/components/Button.svelte'
	import Icon from '$lib/components/Icon.svelte'
</script>

<div class="flex w-1/3 flex-col mt-5 ml-5">
	<Button class=" btn-md w-2/3 !btn-primary">Ajouter un utilisateur</Button>
	{#if $currentWorkspace?.users}
		{#each $currentWorkspace.users as user}
			<div class="flex mt-5 gap-4">
				<div class="avatar">
					<div class="w-12 rounded-full">
						<img src="https://i.pravatar.cc/300" />
					</div>
				</div>
				<div class="flex-1 flex flex-col justify-center">
					<h2 class="text-lg font-bold text-black">{user?.name}</h2>
					<p class="text-sm max-w-lg text-black">{user?.email}</p>
				</div>
				<div class="flex-1 flex flex-col justify-center">
					<Button class="btn-sm w-1/2 !btn-error"><Icon icon="trash" color="white" /></Button>
				</div>
				<div class="divider" />
			</div>
		{/each}
	{/if}
</div>
