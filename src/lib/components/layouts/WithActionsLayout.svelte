<script lang="ts">
	import Avatar from '$lib/features/settings/atoms/Avatar.svelte'
	import { twMerge } from "tailwind-merge"
	export let name = ""
</script>

<div class={twMerge("flex h-[calc(100%-4rem)] bg-white", $$props.class)}>
	<div class="bg-base-400 w-full flex-col flex min-h-full rounded-tl-xl px-2">
		<div class="flex gap-4 bg-primary rounded-tl-xl">
			<div class="w-full flex">
				<div class="flex-1" />
				<div class="w-[11%] h-32 mx-auto">
					<Avatar name={name} class="mt-8" />
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
