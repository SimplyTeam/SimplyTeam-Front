<script lang="ts">
	export let progress = 0
	export let level = 0
</script>

<div>
	{#if progress > 0}
		<div class="h-[2px] bg-base-200 scroll-hidden">
			<div class="bg-primary h-full" style="width: {progress}%"></div>
		</div>
	{/if}
	{#if level > 0}
		<div class="text-[0.5em] text-center">
			Lvl {level}
		</div>
	{/if}
</div>

