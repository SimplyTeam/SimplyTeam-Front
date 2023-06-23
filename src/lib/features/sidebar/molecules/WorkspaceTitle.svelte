<script>
	import Icon from '$lib/components/atoms/Icon.svelte'
	import Logo from '$lib/features/sidebar/atoms/Logo.svelte'
	import { authStore } from '$lib/stores/auth'
	import { currentWorkspace } from '$lib/stores/workspace'
</script>

<div class="flex flex-col gap-4">
	<div class="flex justify-between">
		<div class="text-[0.5em] font-medium">Espace de travail</div>

		{#if $currentWorkspace && $authStore.user?.id === $currentWorkspace.created_by.id}
			<div class="dropdown">
				<div tabindex="0" role="button" class="m-1"><Icon icon="ellipsis-h" color="base" /></div>
				<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-sm">
					<li><a href="/workspaces/{$currentWorkspace.id}/settings">Paramètres</a></li>
					<li>Supprimer</li>
				</ul>
			</div>
		{/if}
	</div>
	<div class="flex items-center gap-4 bg-base-200 p-2">
		<Logo class="flex-none w-8 h-8" />
		<div class="text-[0.5em] text-accent text-ellipsis overflow-hidden font-medium">
			{$currentWorkspace?.name}
		</div>
	</div>
</div>
