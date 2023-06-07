<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte'
	import Button from '$lib/components/molecules/Button.svelte'
	import ModalSettings from '../molecules/ModalDeleteUser.svelte'
	import User from '../molecules/User.svelte'
	import { currentWorkspace } from '$lib/stores/workspace'

	function handleDeleteUser(userId: number) {
		userIdToDelete = userId
		showModal = true
	}

	let showModal = false
	let loading = false
	let userIdToDelete: number
</script>

{#if showModal}
	<ModalSettings
		bind:showModal
		{userIdToDelete}
		on:closeModal={() => {
			showModal = false
		}}
	/>
{/if}
<div class="flex w-1/3 flex-col mt-5">
	<Button class="btn-sm !btn-primary mb-5">
		<Icon icon="plus-circle" class="text-white mx-2" /><span class="text-white text-xs"
			>Ajouter un utilisateur</span
		>
	</Button>
	{#if $currentWorkspace?.users}
		{#each $currentWorkspace.users as user}
			<User {user} on:deleteUser={(event) => handleDeleteUser(event.detail)} />
			<div class="divider w-full mt-0" />
		{/each}
	{/if}
</div>
