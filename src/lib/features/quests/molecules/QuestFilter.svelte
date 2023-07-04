<script lang="ts">
	import Select from '$lib/components/Select.svelte'
	import Button from '$lib/components/atoms/Button.svelte'
	import Icon from '$lib/components/atoms/Icon.svelte'
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
	const filterObject = {
		type: 'allType',
		filter: 'allFilter',
		order: 'asc'
	}
	const filterOptions = {
		type: [
			{ value: 'allType', name: 'Toutes les quêtes' },
			{ value: 'daily', name: 'Quêtes par sprint' },
			{ value: 'monthly', name: 'Quêtes globales' }
		],
		filter: [
			{ value: 'allFilter', name: 'Progression' },
			{ value: 'name', name: 'Nom' },
			{ value: 'date', name: 'Date' }
		],
		order: [
			{ value: 'asc', name: 'Croissant' },
			{ value: 'desc', name: 'Décroissant' }
		]
	}
</script>

<form
	on:submit|preventDefault={() => dispatch('filter', filterObject)}
	class="rounded-xl justify-between items-end py-5 w-full flex"
>
	<Select
		bind:value={filterObject.type}
		class="w-1/3 mx-3"
		placeholder="Type de quête"
		defaultClass="border-gray-200 pr-5"
		items={filterOptions.type}
	/>
	<Select
		bind:value={filterObject.filter}
		class="w-1/3 mx-3"
		placeholder="Filtrer par"
		defaultClass="border-gray-200 pr-5"
		items={filterOptions.filter}
	/>
	<Select
		bind:value={filterObject.order}
		class="w-1/3 mx-3"
		placeholder="Ordre par défaut"
		items={filterOptions.order}
	/>
	<Button type="submit" class=" w-1/5 mx-5 h-10 min-h-0">
		<span class="text-white">Filtrer</span>
		<Icon class="w-5 mx-1 text-white" icon="filter" />
	</Button>
</form>
