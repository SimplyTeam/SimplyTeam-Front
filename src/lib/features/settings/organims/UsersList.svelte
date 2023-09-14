<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte'
	import Button from '$lib/components/atoms/Button.svelte'
	import ModalAddUser from '$lib/features/settings/molecules/ModalAddUser.svelte'
	import { currentWorkspace, getWorkspace } from '$lib/stores/workspace'
	import ModalDeleteUser from '../molecules/ModalDeleteUser.svelte'
	import User from '../molecules/User.svelte'
	import axiosInstance from '$lib/utils/axios'
	import type { IUser } from '$lib/models/auth'

	let showModal = false
	let showModalAddUser = false
	let userIdToDelete: number

	function handleDeleteUser(userId: number) {
		userIdToDelete = userId
		showModal = true
	}
	async function handleUpdateUser(user: IUser) {
		await axiosInstance.post(
			`/workspaces/${$currentWorkspace.id}/users/${user.id}/${user.is_PO ? 'unsetIsPO' : 'setIsPO'}`
		)
	}
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
			>Ajouter un membre</span
		>
	</Button>
	{#if $currentWorkspace?.users}
		<div class="flex-col overflow-auto h-[40vh] lg:h-[30vh] w-full justify-between items-center">
			{#each $currentWorkspace.users as user}
				<User
					on:updateUser={(e) => handleUpdateUser(e.detail)}
					{user}
					on:deleteUser={(event) => handleDeleteUser(event.detail)}
				/>
				<div class="divider w-full mt-0" />
			{/each}
		</div>
	{/if}
</div>
