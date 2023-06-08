<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte'
	import Button from '$lib/components/molecules/Button.svelte'
	import ModalAddUser from '$lib/features/settings/molecules/ModalAddUser.svelte'
	import { currentWorkspace } from '$lib/stores/workspace'
	import ModalDeleteUser from '../molecules/ModalDeleteUser.svelte'
	import User from '../molecules/User.svelte'
	function handleDeleteUser(userId: number) {
		userIdToDelete = userId
		showModal = true
	}

	let showModal = false
	let showModalAddUser = false
	let userIdToDelete: number
</script>

{#if showModalAddUser}
	<ModalAddUser
		bind:showModalAddUser
		on:closeModal={() => {
			showModalAddUser = false
		}}
	/>
{/if}
{#if showModal}
	<ModalDeleteUser
		bind:showModal
		{userIdToDelete}
		on:closeModal={() => {
			showModal = false
		}}
	/>
{/if}
<div class="flex w-2/3 flex-col mt-5">
	<Button
		on:click={() => {
			showModalAddUser = true
		}}
		class="btn-sm  !btn-primary mb-5"
	>
		<Icon icon="plus-circle" class="text-white mx-2" /><span class="text-white text-xs"
			>Ajouter un utilisateur</span
		>
	</Button>
	{#if $currentWorkspace?.users}
		<div class="flex-col overflow-auto h-[40vh] lg:h-[30vh] w-full justify-between items-center">
			{#each $currentWorkspace.users as user}
				<User {user} on:deleteUser={(event) => handleDeleteUser(event.detail)} />
				<div class="divider w-full mt-0" />
			{/each}
		</div>
	{/if}
</div>
