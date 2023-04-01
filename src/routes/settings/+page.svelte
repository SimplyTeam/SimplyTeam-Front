<script lang="ts">
  import SimpleLayout from '$lib/components/layouts/SimpleLayout.svelte'
  import Sidebar from '$lib/features/sidebar/Sidebar.svelte'
</script>

<div class="pl-[max(3vw,3rem)] h-screen">
	<Sidebar withWorkspace={false} />
	<SimpleLayout>settings</SimpleLayout>
</div>
