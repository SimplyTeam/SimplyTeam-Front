<script lang="ts">
	import { enhance } from '$app/forms'

	export let placeholder = 'Rechercher ici'
	export let action = '/search'
</script>

<div class="bg-white w-full h-16 flex justify-center items-center">
	<div class="relative">
		<form method="POST" {action} use:enhance>
			<input
				type="text"
				{placeholder}
				class="input w-full max-w-xs bg-base-200 text-base-content"
			/>
		</form>
		<Icon icon="search" class="absolute right-2 top-1/2 -translate-y-1/2" />
	</div>
</div>
