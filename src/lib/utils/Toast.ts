import Toast from '$lib/components/atoms/Toast.svelte'
export const showToast = (messageToast: string, themeToast: string) => {
	const message = messageToast
	const duration = 4000
	const theme = themeToast
	const position = 'top-right'

	new Toast({
		target: document.body,
		props: { message, duration, theme, position }
	})
}
