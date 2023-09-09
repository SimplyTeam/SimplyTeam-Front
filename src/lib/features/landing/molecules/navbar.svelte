<script lang="ts">
	import { authStore } from '$lib/stores/auth'
	import Button from '$lib/components/atoms/Button.svelte'
	import whiteLogo from '$lib/assets/logo-white.svg'
</script>

<header
	class="bg-primary mx-auto fixed w-full px-4 py-3 top-0 z-50 flex text-white items-center justify-between"
>
	<a href="/" class="font-bold text-white text-xl"><img src={whiteLogo} class="w-12 h-12" /></a>
	<nav class="relative">
		<ul class="flex items-center justify-center font-semibold">
			<li class="relative group px-8 py-2">
				<a href="/#features-section" class="hover:opacity-50 cursor-default">Fonctionnalités</a>
			</li>
			<li class="relative group px-8 py-2">
				<button class="hover:opacity-50 cursor-default">Ressources</button>
				<div
					class="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform"
				>
					<div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
						<div
							class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm"
						/>

						<div class="relative z-10">
							<div class="mt-6 grid grid-cols-2 gap-6">
								<div>
									<p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
										Commencer
									</p>
									<ul class="mt-3 text-[15px]">
										<li>
											<a
												href="/helpcenter/contact"
												class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
											>
												Nous contacter
											</a>
										</li>
										<li>
											<a
												href="/helpcenter/mentions-legales/cgu"
												class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
											>
												CGU
											</a>
										</li>
									</ul>
								</div>
								<div>
									<p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
										Guides
									</p>
									<ul class="mt-3 text-[15px]">
										<li>
											<a
												href="/helpcenter/getting-started"
												class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
											>
												Commencer sur SimplyTeam
											</a>
										</li>
										<li>
											<a
												href="/helpcenter/faq"
												class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
											>
												FAQ
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li class="relative group px-8 py-2">
				<a href="/#pricing-section" class="hover:opacity-50 cursor-default">Tarifs </a>
			</li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li>
				{#if $authStore.user}
					<Button type="submit" class="ml-auto" on:click={authStore.logout}>Déconnexion</Button>
				{:else}
					<a href="/auth/login" class="ml-auto"><Button>Se connecter</Button></a>
				{/if}
			</li>
		</ul>
	</nav>
</header>
