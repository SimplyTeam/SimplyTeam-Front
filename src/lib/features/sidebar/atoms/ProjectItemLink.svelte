<script lang="ts">
	import { page } from '$app/stores'

	export let label: string
	export let icon = 'table'
	export let href: string

	$: isActive = href === $page.url.pathname + $page.url.search
</script>

<a
	{href}
	class="flex items-center gap-2 py-5 pl-8 rounded h-6 hover:project-item-active w-full"
	class:project-item-active={isActive}
>
	<Icon {icon} color="neutral" />
	<span class="text-base">{label}</span>
</a>
