<script lang="ts">
	import { authStore } from '$lib/stores/auth'
	import { goto } from '$app/navigation'

	console.log('auth', $authStore)
	if (!$authStore.user) {
		goto('auth/login')
	}
</script>

<slot />
