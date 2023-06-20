<script lang="ts">
	import workspacesIllustration from '$lib/assets/workspaces.svg'
	import Icon from '$lib/components/atoms/Icon.svelte'
	import Button from '$lib/components/molecules/Button.svelte'
	import Input from '$lib/components/molecules/Input.svelte'
	import { showToast } from '$lib/utils/Toast'
	import axios from '$lib/utils/axios'
	import Svelecte from 'svelecte'
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	export let showModal: boolean

	let payload: { description: string | null; name: string; invitations: string[] } = {
		description: null,
		name: '',
		invitations: []
	}

	let dialog: HTMLDialogElement
	let error: unknown
	let loading = false
	$: if (dialog && showModal) dialog.showModal()

	function createWorkspace() {
		loading = true
		axios
			.post('workspaces', payload)
			.then(() => {
				loading = true
				showToast('Espace de travail créé avec succès', 'success')
				showModal = false
				dispatch('showModal', false)
				dispatch('refresh')
				dialog.close()
			})
			.catch((err) => {
				loading = false
				error = err.response.data.errors
				showToast('Une erreur est survenue', 'error')
			})
	}
</script>

<dialog
	on:keydown
	class="rounded"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div class="flex justify-center w-full h-full !p-0 flex-1">
		<div class="w-6/12">
			<div class="flex flex-col h-full px-10 pt-10 justify-between items-center">
				<div class="flex flex-col  justify-center items-start text-start">
					<h1 class="text-xl xl:text-2xl mb-3 font-bold">Créer un espace de travail</h1>
					<h2 class="text-gray-500">
						Laissez-nous vous aider à concevoir l'environnement parfait pour votre équipe!
					</h2>
				</div>
				<div class="flex flex-col pb-10 w-full">
					<div class="flex flex-col mt-5 items-center">
						<Input
							bind:value={payload.name}
							errorMessage={error?.name}
							placeholder=""
							labelInput="Nom de l'espace de travail"
							name="email"
							type="email"
						/>
					</div>
					<div class="flex flex-col mt-5 items-center">
						<Input
							bind:value={payload.description}
							errorMessage={error?.description}
							placeholder=""
							labelInput="Description"
							name="text"
							type="text"
						/>
					</div>
					<div class="flex mt-5 flex-col items-center w-full">
						<div class="label w-full font-bold flex">
							<span class="label-text">Ajouter des membres</span>
							<div
								class="tooltip tooltip-success right-2 top-1/2 -translate-y-1/2"
								data-tip="Une invitation par email sera envoyé aux membres ajoutés"
							>
								<Icon color="primary" icon="info-circle" />
							</div>
						</div>
						<Svelecte
							searchable
							creatable
							options={[]}
							class="svelecte-control text-red-700 w-full px-8 py-2 rounded-lg font-medium bg-indigo-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
							multiple
							bind:value={payload.invitations}
						/>
					</div>
				</div>
				<div class="flex flex-col items-center w-full">
					<Button {loading} on:click={() => createWorkspace()} class="w-full max-w-sm mt-5 mb-10"
						>C'est parti !</Button
					>
				</div>
			</div>
		</div>
		<div class="flex-1 w-7/12 hidden bg-primary text-start lg:flex">
			<div class="flex flex-col w-full justify-between pt-10 items-center">
				<span class="text-xl xl:text-2xl animate-fadeIn font-medium w-3/4 text-white">
					Créer votre espace de travail en ligne !
				</span>
				<div class="mx-auto relative bg-contain bg-center bg-no-repeat">
					<img src={workspacesIllustration} alt="Simply Team" />
				</div>
				<div class="mx-24 pb-10">
					<span class="text-lg xl:text-xl font-light text-slate-100">
						Créer votre espace de travail pour gérer vos sprint avec vos membres</span
					>
				</div>
			</div>
		</div>
	</div>
</dialog>

<style>
	dialog {
		width: 80%;
		height: 80%;
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
