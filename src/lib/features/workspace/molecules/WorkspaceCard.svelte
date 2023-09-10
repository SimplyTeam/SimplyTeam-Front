<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte'
	import type { IWorkspace } from '$lib/models/workspaces'
	import { authStore } from '$lib/stores/auth'

	export let workspace: IWorkspace
	function getInitialsWithNameWithSecondCharInLowercase(name: string) {
		const first = name[0].toUpperCase()
		const second = name[1].toLowerCase()
		return `${first}${second}`
	}
	$: numberOfUsers = workspace?.users.length
	$: linkToWorkspace =
		workspace && workspace.projects?.length <= 0
			? `/workspaces/${workspace.id}`
			: `/workspaces/${workspace.id}/${workspace.projects[0].id}/sprints`
</script>

<div
	data-sveltekit-preload-data="off"
	class="card w-3/4 card-workspace md:w-1/4 min-h-[10rem] bg-primary mr-10 my-6 text-primary-content"
>
	<a href={linkToWorkspace}>
		<div class="card-body">
			<div class="card-title justify-between">
				<h2 class="card-title text-ellipsis overflow-hidden text-white">{workspace.name}</h2>
				{#if workspace.created_by.id === $authStore.user.id}
					<Icon icon="crown" class="!text-warning font-extrabold" color="secondary" />
				{/if}
			</div>
			<div class="w-full">
				<p class="text-ellipsis overflow-hidden">{workspace.description ?? ''}</p>
			</div>
			<div class="card-actions justify-end">
				<div class="avatar-group -space-x-2">
					{#each workspace.users as user, i (user.id)}
						{#if i < 4}
							<div class="avatar bg-secondary text-white flex justify-center">
								<div class="w-6 self-center text-center">
									{getInitialsWithNameWithSecondCharInLowercase(user.name)}
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
