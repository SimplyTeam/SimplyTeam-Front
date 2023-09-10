<script lang="ts">
	import { enhance } from '$app/forms'
	import Button from '$lib/components/atoms/Button.svelte'
	import Input from '$lib/components/atoms/Input.svelte'
	import Toast from '$lib/components/atoms/Toast.svelte'
	import ContactUsDescription from '$lib/features/contact/molecule/ContactUsDescription.svelte'
	import TextArea from '$lib/components/atoms/textArea.svelte'
	import axios from '$lib/utils/axios'

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
	let formContact: { name: string; email: string; message: string } = {
		name: '',
		email: '',
		message: ''
	}
	async function handleSubmit() {
		try {
			const res = await axios.post('contact-us', formContact)
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
		<ContactUsDescription />
	</div>
	<div class="lg:w-3/4 xl:w-7/12 p-6 sm:p-12">
		<div class="flex flex-col w-full">
			<section class="bg-white w-full">
				<div class="py-8 px-4 mx-auto">
					<form on:submit|preventDefault={() => handleSubmit()} class="space-y-8">
						<div>
							<Input
								type="text"
								on:input={(e) => (formContact.name = e.detail)}
								labelInput="Nom"
								name="name"
								placeholder="Nom"
							/>
						</div>
						<div>
							<Input
								type="text"
								on:input={(e) => (formContact.email = e.detail)}
								labelInput="Email"
								name="Email"
								placeholder="Email"
							/>
						</div>
						<div class="sm:col-span-1">
							<TextArea
								on:input={(e) => (formContact.message = e.detail)}
								rows="5"
								labelInput="Message"
								name="message"
							/>
						</div>
						<Button type="submit" class="w-full">Envoyer</Button>
					</form>
				</div>
			</section>
		</div>
	</div>
</div>
