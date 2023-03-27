<script lang="ts">
	import Sidebar from '$lib/features/sidebar/Sidebar.svelte'
</script>

<div class="pl-[max(15vw,15rem)] h-screen">
	<Sidebar />
    <slot />
</div>
