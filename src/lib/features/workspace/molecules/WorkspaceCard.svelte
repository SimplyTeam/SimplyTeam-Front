<script lang="ts">
	import { page } from '$app/stores'
	import Icon from '$lib/components/atoms/Icon.svelte'
	import type { IWorkspace } from '$lib/models/workspaces'
	export let workspace: IWorkspace
	$: numberOfUsers = workspace.users.length
</script>

<div
	data-sveltekit-preload-data="off"
	class="card w-3/4 card-workspace md:w-1/4 min-h-[10rem] bg-primary mr-10 my-6 text-primary-content"
>
	<a href="/workspaces/{workspace.id}">
		<div class="card-body">
			<div class="card-title justify-between">
				<h2 class="card-title text-ellipsis overflow-hidden text-white">{workspace.name}</h2>
				{#if workspace.created_by.id === $page.data.user.user.id}
					<Icon icon="crown" class="!text-warning font-extrabold" color="secondary" />
				{/if}
			</div>
			<div class="w-full">
				<p class="text-ellipsis overflow-hidden">{workspace.description ?? ''}</p>
			</div>
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
	</a>
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
