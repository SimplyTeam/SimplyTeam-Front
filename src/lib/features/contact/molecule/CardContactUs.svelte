<script>
	import { goto } from '$app/navigation'
	import Button from '$lib/components/atoms/Button.svelte'
	import Icon from '$lib/components/atoms/Icon.svelte'
	import CardContact from '$lib/features/contact/atoms/CardContact.svelte'
</script>

<CardContact>
	<div class="card-body text-center">
		<div class="flex justify-center">
			<img src="/phone.png" alt="logo" class="w-32 h-32" />
		</div>
		<h2 class="card-title mb-1">Besoin d'aide ou avez-vous des questions ?</h2>
		<p>Si vous avez des questions sur SimplyTeam, n'hésitez pas à nous contacter.</p>
		<div class="card-actions justify-center mt-5">
			<Button on:click={() => goto('contact/contact-us')} class="btn">Nous contacter</Button>
		</div>
	</div>
</CardContact>
