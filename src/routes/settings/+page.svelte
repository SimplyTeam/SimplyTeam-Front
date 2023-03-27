<script lang="ts">
	import Sidebar from '$lib/features/sidebar/Sidebar.svelte'
</script>

<div class="pl-[max(3vw,3rem)] h-screen">
	<Sidebar withWorkspace={false} />
	<SimpleLayout>
        settings
    </SimpleLayout>
</div>
