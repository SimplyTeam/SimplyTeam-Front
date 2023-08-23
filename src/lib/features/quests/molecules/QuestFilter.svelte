<script lang="ts">
	import Select from '$lib/components/atoms/Select.svelte'
	import Button from '$lib/components/atoms/Button.svelte'
	import Icon from '$lib/components/atoms/Icon.svelte'
	import type { IFilterObject } from '$lib/models/quest'
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
	const filterObject: IFilterObject = {
		quest_type: '4',
		in_progress_only: '0',
		default_order: 'asc'
	}
	const filterOptions = {
		quest_type: [
			{ value: '1', name: 'Quêtes globales' },
			{ value: '2', name: 'Quêtes des tâches' },
			{ value: '3', name: 'Quêtes de sprint' },
			{ value: '4', name: 'Toutes les quêtes' }
		],
		in_progress_only: [{ value: '0', name: 'Progression' }],
		default_order: [
			{ value: 'asc', name: 'Croissant' },
			{ value: 'desc', name: 'Décroissant' }
		]
	}
	const handleSubmit = () => {
		dispatch('filter', filterObject)
	}
</script>

<form
	on:submit|preventDefault={() => handleSubmit()}
	class="rounded-xl justify-between items-end py-5 w-full flex"
>
	<Select
		bind:value={filterObject.quest_type}
		class="w-1/3 mx-3"
		placeholder="Type de quête"
		defaultClass="border-gray-200 pr-5"
		items={filterOptions.quest_type}
	/>
	<Select
		bind:value={filterObject.in_progress_only}
		class="w-1/3 mx-3"
		placeholder="Filtrer par"
		defaultClass="border-gray-200 pr-5"
		items={filterOptions.in_progress_only}
	/>
	<Select
		bind:value={filterObject.default_order}
		class="w-1/3 mx-3"
		placeholder="Ordre par défaut"
		items={filterOptions.default_order}
	/>
	<Button type="submit" class=" w-1/5 mx-5 h-10 min-h-0">
		<span class="text-white">Filtrer</span>
		<Icon class="w-5 mx-1 text-white" icon="filter" />
	</Button>
</form>
