<script>
	import { page } from '$app/stores'
	import Icon from '$lib/components/atoms/Icon.svelte'
	import Logo from '$lib/features/sidebar/atoms/Logo.svelte'

	import { currentWorkspace } from '$lib/stores/workspace'
</script>

<div class="flex flex-col gap-4">
	<div class="flex justify-between">
		<div class="text-[0.5em] font-medium">Espace de travail</div>

		{#if $currentWorkspace && $page.data.user.user.id === $currentWorkspace.created_by.id}
			<div class="dropdown">
				<label tabindex="0" class="m-1"><Icon icon="ellipsis-h" color="base" /></label>
				<ul
					tabindex="0"
					class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-sm"
				>
					<li><a href="/workspaces/{$currentWorkspace.id}/settings">Paramètres</a></li>
					<li><a>Supprimer</a></li>
				</ul>
			</div>
		{/if}
	</div>
	<div class="flex items-center gap-4 bg-base-200 p-2">
		<Logo class="flex-none w-8 h-8" />
		<div class="text-[0.5em] text-accent font-medium">{$currentWorkspace?.name}</div>
	</div>
</div>
