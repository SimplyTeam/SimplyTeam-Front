<script lang="ts">
	import Avatar from '$lib/features/settings/atoms/Avatar.svelte'
	import type { IUser } from '$lib/models/auth'
	export let user: IUser
</script>

<div class=" {$$props.class} flex h-[calc(100%-4rem)] bg-white">
	<div class="bg-base-400 w-full flex-col flex min-h-full rounded-tl-xl px-2">
		<div class="flex gap-4 bg-primary rounded-tl-xl">
			<div class="w-full flex">
				<div class="flex-1" />
				<div class="w-[11%] h-32 mx-auto">
					<Avatar name={user.name} />
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
