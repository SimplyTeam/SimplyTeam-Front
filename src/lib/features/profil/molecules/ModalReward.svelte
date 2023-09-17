<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte'
	import Icon from '$lib/components/atoms/Icon.svelte'
	import { authStore } from '$lib/stores/auth'
	import { showToast } from '$lib/utils/Toast'
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
	export let showModal: Boolean
	let dialog: HTMLDialogElement
	$: if (dialog && showModal) dialog.showModal()

	$: if (dialog && !showModal) dialog.close()

	export let reward
	export let profilShow = false
	export let isPassed = false
	function closeModal() {
		dispatch('closeModal')
	}
	let buttonText = 'Copier'
	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(reward.coupon)
			buttonText = 'Copié'

			// Réinitialiser le texte du bouton après 3 secondes
			setTimeout(() => {
				buttonText = 'Copier'
			}, 3000)
		} catch (err) {
			showToast('Erreur lors de la copie dans le presse-papiers', 'error')
		}
	}
</script>

<dialog
	class="{$$props.class} rounded-xl overflow-visible"
	bind:this={dialog}
	on:close={() => (showModal = false)}
>
	<div
		class="mx-auto min-w-[60vh] flex-col text-center bg-white border-dashed border-2 border-gray-400 rounded-lg overflow-hidden shadow-lg"
	>
		<div class="flex mx-5">
			<div class="py-6 w-1/3">
				<img class="w-[50%] mx-auto" src={reward.image} alt="Logo de l'enseigne" />
			</div>
			<div class="w-2/3 flex flex-col justify-center">
				<p class="font-bold text-2xl">{reward.description}</p>
				{#if profilShow}
					<p class="text-gray-700 text-center">
						Entrer le code suivant dans votre application pour obtenir votre récompense
					</p>
					{#if $authStore.user.premium_expiration_date}
						<div class="flex justify-center mt-2">
							<div
								class="flex border-gray-400 rounded-lg border-dashed border-2 justify-center content-center items-center"
							>
								<p
									class="text-md justify-center items-center self-center text-center w-2/3 min-w-[30vh]  xl:min-w-[40vh] font-bold"
								>
									{reward.coupon}
								</p>
								<button
									class="bg-primary px-5 py-2 text-md text-white rounded-lg"
									on:click={() => copyToClipboard()}
								>
									{buttonText}
								</button>
							</div>
						</div>
					{:else}
						<a href="profil/plan" class="lg:-mb-6 hover:scale-105 ease-in z-10">
							<Button class="text-xs mb-3">
								Plan premium
								<Icon class="text-white" icon="crown" />
							</Button>
						</a>
					{/if}
				{:else if isPassed}
					<p>Vous avez obtenu cette récompense. Regardez dans la section des récompenses</p>
				{:else}
					<p>Voici la promotion que vous obtiendrez si vous atteignez le niveau</p>
				{/if}
			</div>
		</div>
		<div class="flex justify-center mt-5">
			<Button class=" w-2/3 bg-primary text-white border-none" on:click={() => closeModal()}>
				<span class="text-white">Fermer</span>
			</Button>
		</div>
	</div>
</dialog>

<style>
	dialog {
		padding: 0;
		left: 50%;
		top: 50%;
		position: absolute;
		float: left;
		transform: translate(-50%, -50%);
		border: none;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.1s ease-out;
	}
	@keyframes zoom {
		from {
			transform: translate(-50%, -50%) scale(0.9);
		}
		to {
			transform: translate(-50%, -50%) scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	:global(.svelecte-control) {
		--sv-active-border: none !important;
		--sv-border-color: none !important;
		--sv-bg: rgb(224 231 255 / var(--tw-bg-opacity)) !important;
		--sv-placeholder-color: transparent !important;
	}
</style>
