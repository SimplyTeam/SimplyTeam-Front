<script lang="ts">
	export let showModal: Boolean

	let dialog: HTMLDialogElement
	$: if (dialog && showModal) dialog.showModal()

	$: if (dialog && !showModal) dialog.close()
</script>

<dialog class="{$$props.class} rounded-xl overflow-visible" bind:this={dialog} on:close={() => (showModal = false)}>
	<div class="flex justify-center w-full h-full !p-0 flex-1">
		<div class="flex justify-center w-full h-full !p-0 flex-1">
			<div class="w-full">
				<div class="flex flex-col h-full px-5 pt-5 items-center">
					<div class="flex flex-col justify-center items-start text-start">
						<slot name="header" />
					</div>
					<slot name="message" />
					<div class="mb-10 w-full">
						<slot name="action" />
					</div>
				</div>
			</div>
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
