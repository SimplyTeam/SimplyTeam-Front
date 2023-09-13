<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte'
	import Input from '$lib/components/atoms/Input.svelte'
	import Toast from '$lib/components/atoms/Toast.svelte'
	import TextArea from '$lib/components/atoms/textArea.svelte'
	import axios from '$lib/utils/axios'
	import FeedbackDescription from '$lib/features/contact/molecule/FeedbackDescription.svelte'
	import Select from 'svelte-select'

	const showToast = (messageToast: string, themeToast: string) => {
		const message = messageToast
		const duration = 3000
		const theme = themeToast
		const position = 'top-right'

		new Toast({
			target: document.body,
			props: { message, duration, theme, position }
		})
	}
	let formContact: { title: string; body: string; labels: string[] } = {
		title: '',
		body: '',
		labels: []
	}
	const labelObjects = [
		{ label: 'Bug', value: 'bug' },
		{ label: 'Amélioration', value: 'enhancement' },
		{ label: 'Question', value: 'question' },
		{ label: 'Documentation', value: 'documentation' }
	]
	async function handleSubmit() {
		try {
			const payload = formContact
			payload.labels = formContact.labels.map((label) => label.value)
			await axios.post('/create-github-issue', formContact)
			showToast('Votre message a bien été envoyé', 'success')
		} catch (error) {
			showToast('Votre message a échoué', 'error')
		}
	}
</script>

<div
	class="max-w-screen min-h-[60vh] mx-10 my-24 bg-white shadow sm:rounded-lg flex justify-center flex-1"
>
	<div class="flex-1 bg-primary hidden lg:flex">
		<FeedbackDescription />
	</div>
	<div class="lg:w-3/4 xl:w-7/12 p-6 sm:p-12">
		<div class="flex flex-col w-full">
			<section class="bg-white w-full">
				<div class="py-8 px-4 mx-auto">
					<form on:submit|preventDefault={() => handleSubmit()} class="space-y-8">
						<div>
							<Input
								type="text"
								on:input={(e) => (formContact.title = e.detail)}
								labelInput="Nom"
								name="name"
								placeholder="Nom"
							/>
						</div>
						<div class="!mt-0">
							<label for="input" class="label mt-0 font-bold">
								<span class="label-text"> Label </span>
							</label>
							<Select
								bind:value={formContact.labels}
								class="w-1/3 mx-3"
								multiple
								placeholder="Type de label"
								defaultClass="border-gray-200 bg-gray-200 pr-5"
								items={labelObjects}
							/>
							<div class="sm:col-span-1">
								<TextArea
									on:input={(e) => (formContact.body = e.detail)}
									rows="5"
									labelInput="Message"
									name="message"
								/>
							</div>
							<Button type="submit" class="w-full">Envoyer</Button>
						</div>
					</form>
				</div>
			</section>
		</div>
	</div>
</div>
