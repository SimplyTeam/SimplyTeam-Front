<script lang="ts">
	import { onMount } from 'svelte'

	export let message: string
	export let duration = 3000
	export let theme = 'info'
	export let position = 'top-center'

	let timer: ReturnType<typeof setTimeout>
	let show = false

	const close = () => {
		clearTimeout(timer)
		show = false
	}

	const startTimer = () => {
		timer = setTimeout(() => {
			close()
		}, duration)
	}

	const handleShow = () => {
		show = true
		startTimer()
	}
	$: if (show) {
		handleShow()
	}
	onMount(() => {
		handleShow()
	})
</script>

{#if show}
	<div class={`toast ${theme} ${position}`} on:click={() => close()} aria-hidden="true">
		<div class="message">{message}</div>
	</div>
{/if}

<style>
	.toast {
		z-index: 99;
		position: fixed;
		height: fit-content;
		width: fit-content;
		padding: 12px;
		font-size: 14px;
		font-weight: bold;
		border-radius: 4px;
		transition: opacity 0.3s ease-in-out;
		cursor: pointer;
	}

	.info {
		background-color: #2196f3;
		color: #fff;
	}

	.success {
		background-color: #4caf50;
		color: #fff;
	}

	.warning {
		background-color: #ffc107;
		color: #fff;
	}

	.error {
		background-color: #f44336;
		color: #fff;
	}

	.top-right {
		bottom: 20px;
		right: 20px;
		animation: toastIt 3000ms cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;
	}

	.bottom-left {
		bottom: 20px;
		left: 20px;
	}

	.top-right {
		top: 20px;
		right: 20px;
	}
	.top-center {
		top: 20px;
		left: 50%;
		transform: translateX(-50%);
		animation: toastIt 3000ms cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;
	}
	@keyframes toastIt {
		0%,
		100% {
			transform: translateY(-150%);
			opacity: 0;
		}
		10%,
		90% {
			transform: translateY(0);
			opacity: 1;
		}
	}
	.top-left {
		top: 20px;
		left: 20px;
	}
	.message {
		margin-right: 10px;
	}
</style>
