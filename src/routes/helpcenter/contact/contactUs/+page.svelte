<script lang="ts">
	import { enhance } from '$app/forms'
	import image from '$lib/assets/logo.png'
	import Button from '$lib/components/atoms/Button.svelte'
	import { goto } from '$app/navigation'
	import Input from '$lib/components/atoms/Input.svelte'
	import Toast from '$lib/components/atoms/Toast.svelte'
	import type { ILoginErrors, ILoginInput } from '$lib/models/auth'
	import { authStore } from '$lib/stores/auth'
	import Navbar from '$lib/features/landing/molecules/navbar.svelte'
	import ContactUsDescription from '$lib/features/contact/molecule/ContactUsDescription.svelte'
	import TextArea from '$lib/components/atoms/textArea.svelte'

	let popup

	function init() {
		popup = window.open('http://localhost/auth/google', '_blank', 'width=800, height=600')
	}

	const loginForm: ILoginInput = {
		email: '',
		password: ''
	}
	let loginErrors: ILoginErrors | undefined = undefined

	let loading = false

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

	async function onLogin() {
		loading = true
		try {
			await authStore.login(loginForm)
			goto('/workspaces')
		} catch ({ response }) {
			if (response && response.status === 422) {
				loginErrors = response.data.errors
				showToast('Une erreur est survenue : ' + response.data.errors.message, 'error')
			}
		} finally {
			loading = false
		}
	}
</script>

<div
	class="max-w-screen min-h-[60vh] mx-10 my-10 bg-white shadow sm:rounded-lg flex justify-center flex-1"
>
	<div class="flex-1 bg-primary hidden lg:flex">
		<ContactUsDescription />
	</div>
	<div class="lg:w-3/4 xl:w-7/12 p-6 sm:p-12">
		<div class="flex flex-col w-full">
			<section class="bg-white w-full">
				<div class="py-8 px-4 mx-auto">
					<form action="#" class="space-y-8">
						<div>
							<Input type="text" labelInput="Nom" name="name" placeholder="nom" />
						</div>
						<div>
							<Input type="text" labelInput="Email" name="Email" placeholder="email" />
						</div>
						<div class="sm:col-span-1">
							<TextArea rows="5" labelInput="Message" name="message" />
						</div>
						<Button type="submit" class="w-full">Envoyer</Button>
					</form>
				</div>
			</section>
		</div>
	</div>
</div>
