<script lang="ts">
	import AuthDescription from '$lib/features/auth/molecules/AuthDescription.svelte'
	import Navbar from '$lib/features/landing/molecules/navbar.svelte'
</script>

<div class="h-screen overflow-hidden">
	<Navbar />
	<div class="max-w-screen h-[95vh] mt-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
		<div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
			<slot />
		</div>
		<div class="flex-1 bg-primary text-center hidden lg:flex">
			<AuthDescription />
		</div>
	</div>
</div>
