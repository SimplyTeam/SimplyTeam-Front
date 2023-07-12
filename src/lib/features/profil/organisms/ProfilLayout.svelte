<script lang="ts">
	import type { IUser } from '$lib/models/auth'
	import Input from '$lib/components/atoms/Input.svelte'
	export let user: IUser | null = null
</script>

<div>
	<div class="w-full flex bg-white">
		<div class="flex w-[75%] my-7 justify-evenly items-center">
			{#if user}
				<div class="flex divide-x-2 items-center text-center divide-black">
					<div class="flex flex-col px-5 items-center">
						<span class="text-2xl text-primary font-bold">0</span>
						<span class="text-sm">tâches réalisées</span>
					</div>
					<div class="flex flex-col px-5 mx-5 items-center">
						<span class="text-2xl text-primary font-bold">0</span>
						<span class="text-sm">Quêtes en cours</span>
					</div>
				</div>
				<form class="flex flex-col">
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
			{/if}
		</div>
	</div>
	<div class="divider w-full my-0 py-0 h-0 bg-black after:opacity-100 !opacity-100" />
</div>
