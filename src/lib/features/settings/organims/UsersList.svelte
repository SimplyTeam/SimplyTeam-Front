<script lang="ts">
	import { currentWorkspace } from '$lib/stores/workspace'
	import Button from '$lib/components/Button.svelte'
	import Icon from '$lib/components/Icon.svelte'

	const deleteUsers = (idUser: number): void => {}
</script>

<div class="flex w-1/3 flex-col mt-5">
	<Button class="btn-sm !btn-primary mb-5">
		<Icon icon="plus-circle" class="text-white mx-2" /><span class="text-white text-xs"
			>Ajouter un utilisateur</span
		></Button
	>
	{#if $currentWorkspace?.users}
		{#each $currentWorkspace.users as user}
			<div class="flex gap-4">
				<div class="avatar">
					<div class="w-10 h-10 rounded-full">
						<img src="https://i.pravatar.cc/200" />
					</div>
				</div>
				<div class="flex-1 flex flex-col justify-center">
					<h2 class="text-lg font-bold text-black">{user?.name}</h2>
					<p class="text-sm max-w-lg text-black">{user?.email}</p>
				</div>
				<div class="flex-2 flex flex-col justify-center">
					<Icon
						icon="trash"
						color="error"
						class="cursor-pointer text-error hover:text-red-400 hover:scale-110 transition-all ease-in-out"
					/>
				</div>
			</div>
			<div class="divider w-full mt-0" />
		{/each}
	{/if}
</div>
