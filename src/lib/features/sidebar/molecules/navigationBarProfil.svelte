<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte'
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	export let currentTab: 'users' | 'projects' = 'users'

	$: styleForTab = (tab: 'users' | 'projects') => {
		if (tab === currentTab) {
			return 'tab-active tab-bordered !border-primary'
		} else {
			return ''
		}
	}
</script>

<div class="tabs mt-5 w-full bg-white py-5 px-10">
	<Icon
		icon="user-circle"
		on:click={() => dispatch('changeTab', 'users')}
		on:keydown
		class="tab {styleForTab('users')} text-xl text-bold"
	/>
	<div class="divider divider-horizontal divide-black" />
	<Icon
		icon="award"
		on:click={() => dispatch('changeTab', 'projects')}
		on:keydown
		class="tab {styleForTab('projects')} text-xl text-bold"
	/>
	<div class="divider divider-horizontal divide-black" />
</div>
