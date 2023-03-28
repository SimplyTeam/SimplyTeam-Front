<script lang="ts">
	import Icon from "$lib/components/Icon.svelte"

    export let icon: string
    export let href: string
    export let label: string
</script>

<a {href}>
  <Icon {icon} />
  {label}
</a>
