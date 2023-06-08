<script lang="ts">
	import Avatar from '$lib/features/settings/atoms/Avatar.svelte'

	export let illustration: string
</script>

<div class=" {$$props.class} flex h-[calc(100%-4rem)] bg-white">
	<div class="bg-base-400 w-full flex-col flex min-h-full rounded-tl-xl px-2">
		<div class="flex gap-4 bg-primary rounded-tl-xl">
			<div class="w-full flex">
				<div class="flex-1" />
				<div class="w-1/6 mx-auto">
					<Avatar src="https://i.pravatar.cc/300" />
				</div>
				<div class="flex-1 flex w-full justify-center items-end">
					<slot name="actions" />
				</div>
			</div>
		</div>
		<div class="flex flex-col">
			<slot name="content" />
		</div>
		<slot />
	</div>
</div>
