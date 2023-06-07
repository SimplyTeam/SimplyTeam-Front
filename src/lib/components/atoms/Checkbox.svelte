<script lang="ts">
	export let checked = false
	export let name: string
</script>

<label
	for={name}
	class="rounded-xl border-secondary border-2 h-4 w-4 flex items-center justify-center"
>
	<input type="checkbox" class="hidden peer" {checked} {name} id={name} />
	<div class="bg-secondary h-2 w-2 rounded-xl hidden peer-checked:block" />
</label>
