<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte'
	import Button from '$lib/components/atoms/Button.svelte'
	import Avatar from '$lib/features/settings/atoms/Avatar.svelte'
	import { currentWorkspace } from '$lib/stores/workspace'
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	export let user: IUser
	function deleteUser(): void {
		dispatch('deleteUser', user.id)
	}
	function updateUser(): void {
		dispatch('updateUser', user)
	}
</script>

<div class="flex gap-4">
	<Avatar name={user.name} class="w-10 h-10" sizeText="text-sm" />
	<div class="flex-1 flex flex-col justify-center">
		<div class="flex">
			<h2 class="text-lg font-bold text-black">{user?.name}</h2>
			{#if $currentWorkspace && $currentWorkspace.created_by.id === user.id}
				<Icon icon="crown" class="!text-warning ml-2 font-extrabold" color="secondary" />
			{/if}
		</div>
		<p class="text-sm max-w-lg text-black">{user?.email}</p>
	</div>
	<div class="flex-2 flex items-center text-center justify-center">
		<div class="flex items-center flex-col">
			<span class="text-sm text-black">Product Owner</span>
			<label class="rounded-xl border-secondary border-2 h-4 w-4 flex items-center justify-center">
				<input
					type="checkbox"
					class="hidden peer"
					on:input={() => updateUser()}
					bind:checked={user.is_PO}
				/>
				<div class="bg-secondary h-2 w-2 rounded-xl hidden peer-checked:block" />
			</label>
		</div>
		<Button
			class="bg-transparent border-none hover:bg-transparent"
			on:click={() => {
				deleteUser()
			}}
		>
			<Icon
				icon="trash"
				color="error"
				class="cursor-pointer text-error hover:text-red-400 hover:scale-125 transition-all ease-in-out"
			/>
		</Button>
	</div>
</div>
