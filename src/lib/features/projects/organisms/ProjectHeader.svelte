<script lang="ts">
	import Shortcut from '../atoms/Shortcut.svelte'

	const shortcuts = [
		{
			label: 'Home',
			icon: 'home',
			href: '/'
		},
		{
			label: 'Home',
			icon: 'home',
			href: '/'
		}
	]
</script>

<h1>Project</h1>
{#each shortcuts as shortcut}
	<Shortcut {...shortcut} />
{/each}
