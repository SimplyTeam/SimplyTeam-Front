<script lang="ts">
	import type { IUser } from '$lib/models/auth'
	import Input from '$lib/components/atoms/Input.svelte'
	export let user: IUser | null = null
	export let loading = false
</script>

<div>
	<div class="w-full flex bg-white">
		<div class="flex w-[75%] my-7 justify-evenly items-center">
			<div class="flex divide-x-2 items-center text-center divide-black" />
			{#if user && !loading}
				<form class="flex flex-col ml-64">
					<Input
						placeholder="Peusdo"
						label="Nom de l'espace"
						type="text"
						name="name"
						value={user.name}
						fontSize="text-lg"
						fontWeight="font-bold"
						class="w-full !text-lg border-none hover:border-dotted !font-bold bg-transparent h-8"
					/>
					<Input
						placeholder="Email"
						label="Description de l'espace"
						type="text"
						name="name"
						fontSize="text-lg"
						fontWeight="font-bold"
						value={user.email}
						class="w-full bg-transparent border-none hover:border-dotted h-8"
					/>
				</form>
			{:else if loading}
				<div class="flex flex-col ml-64">
					<div class="w-64 h-5 bg-gray-300 rounded-lg mb-2 mx-10" />
					<div class="w-64 h-5 bg-gray-300 rounded-lg mx-10" />
				</div>
			{/if}
		</div>
	</div>
	<div class="divider w-full my-0 py-0 h-0 bg-black after:opacity-100 !opacity-100" />
</div>
