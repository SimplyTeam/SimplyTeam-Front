<script>
	import { goto } from '$app/navigation'
	import Button from '$lib/components/atoms/Button.svelte'
	import CardContact from '$lib/features/contact/atoms/CardContact.svelte'
</script>

<CardContact>
	<div class="card-body text-center">
		<div class="flex justify-center">
			<img src="/bug.png" alt="logo" class="w-32 h-32" />
		</div>
		<h2 class="card-title mb-1">Partagez vos commentaires et signalez les problèmes</h2>
		<p>
			Si vous avez des commentaires sur nos fonctionnalités ou si vous avez repéré des bugs,
			faites-le nous savoir.
		</p>
		<div class="card-actions justify-center mt-5">
			<Button on:click={() => goto('contact/feedback')} class="btn">Nous contacter</Button>
		</div>
	</div>
</CardContact>
