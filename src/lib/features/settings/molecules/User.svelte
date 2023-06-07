<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte'
	import Button from '$lib/components/molecules/Button.svelte'
	import type { IUser } from '$lib/models/user'
	import { currentWorkspace } from '$lib/stores/workspace'
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher<{ deleteUser: number }>()

	export let user: IUser
	function deleteUser(): void {
		dispatch('deleteUser', user.id)
	}
</script>

<div class="flex gap-4">
	<div class="avatar">
		<div class="w-10 h-10 rounded-full">
			<img src="https://i.pravatar.cc/200" />
		</div>
	</div>
	<div class="flex-1 flex flex-col justify-center">
		<div class="flex">
			<h2 class="text-lg font-bold text-black">{user?.name}</h2>
			{#if $currentWorkspace && $currentWorkspace.created_by.id === user.id}
				<Icon icon="crown" class="!text-warning ml-2 font-extrabold" color="secondary" />
			{/if}
		</div>
		<p class="text-sm max-w-lg text-black">{user?.email}</p>
	</div>
	<div class="flex-2 flex flex-col justify-center">
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
