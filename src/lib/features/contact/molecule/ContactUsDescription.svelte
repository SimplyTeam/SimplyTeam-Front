<script>
	import Icon from '$lib/components/atoms/Icon.svelte'
</script>

<div class="flex flex-col justify-around items-start px-10 w-full">
	<div class="flex flex-col">
		<span class="text-3xl xl:text-3xl font-bold animate-fadeIn font-medium text-white mt-12">
			Nous contacter
		</span>
		<span class="text-sm xl:text-lg animate-fadeIn font-medium  text-white mt-12">
			Contactez-nous pour toute question ou demande de renseignement sur nos services.
		</span>
		<span class="text-sm xl:text-lg animate-fadeIn font-medium  text-white ">
			Nous vous répondrons dans les plus brefs délais.
		</span>
	</div>
	<div class="flex-col">
		<div class="flex items-center mt-12">
			<Icon icon="map-marker-alt" size="2xl" class="text-white" />
			<span class="text-sm xl:text-xl animate-fadeIn font-medium text-white ml-4">
				1 Rue de la Paix, 75000 Paris
			</span>
		</div>
		<div class="flex items-center mt-12">
			<Icon icon="phone" size="2xl" class="text-white" />
			<span class="text-sm xl:text-xl animate-fadeIn font-medium text-white ml-4">
				+33 6 12 34 56 78
			</span>
		</div>
		<div class="flex items-center mt-12">
			<Icon Icon icon="envelope" size="2xl" class="text-white" />
			<span class="text-sm xl:text-xl animate-fadeIn font-medium text-white ml-4">
				SimplyTeam@outlook.com
			</span>
		</div>
	</div>
</div>
