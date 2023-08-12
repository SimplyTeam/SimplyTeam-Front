<script lang="ts">
	export let sizeText = 'text-4xl'
	export let name = ''
	function getInitialsWithNameWithSecondCharInLowercase(name: string) {
		console.log(name)
		if (!name) return ''
		const first = name[0].toUpperCase()
		const second = name[1].toLowerCase()
		return `${first}${second}`
	}
</script>

<div class="avatar border-solid {$$props.class} border-white placeholder">
	<div
		class="bg-secondary shadow-lg border-2 border-solid border-800 text-white rounded-full sm:w-20 md:w-28 lg:32"
	>
		<span class={sizeText}>{getInitialsWithNameWithSecondCharInLowercase(name)}</span>
	</div>
</div>
