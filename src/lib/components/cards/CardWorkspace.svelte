<script lang="ts">
	import { page } from '$app/stores'
	import Icon from '$lib/components/Icon.svelte'
	interface IUser {
		id: number
		name: string
		email: string
		created_at: Date
		updated_at: Date
	}
	interface IWorkspace {
		id: number
		name: string
		description: number
		created_by: IUser
		users: Array<IUser>
		created_at: Date
		updated_at: Date
	}
	export let workspace: IWorkspace
	$: numberOfUsers = workspace.users.length
</script>

<div class="card w-1/4 bg-primary mr-6 my-6 text-primary-content">
	<div class="card-body">
		<div class="card-title justify-between">
			<h2 class="card-title text-white">{workspace.name}</h2>
			{#if workspace.created_by.id === $page.data.user.user.id}
				<Icon icon="crown" class="!text-warning font-extrabold" color="secondary" />
			{/if}
		</div>
		<p>{workspace.description ?? ''}</p>
		<div class="card-actions justify-end">
			<div class="avatar-group -space-x-4">
				{#each workspace.users as user, i (user.id)}
					{#if i < 4}
						<div class="avatar">
							<div class="w-6">
								<img src="https://i.pravatar.cc/300" alt="user avatar" />
							</div>
						</div>
					{/if}
				{/each}
				<div class="avatar placeholder">
					<div class="w-6 bg-neutral-focus text-neutral-content">
						<span class="text-xs text-white">{numberOfUsers}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
