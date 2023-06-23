<script lang="ts">
	import { goto } from '$app/navigation'
	import { authStore } from '$lib/stores/auth'

	if (!$authStore.user) {
		goto('auth/login')
	}
</script>

<slot />
