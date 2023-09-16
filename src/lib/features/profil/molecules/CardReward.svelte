<script lang="ts">
	export let reward
	import moment from 'moment-with-locales-es6'

	import 'moment/locale/fr' // Importe la localisation française
	import ModalReward from './ModalReward.svelte'
	moment.locale('fr')

	let showModal = false
</script>

<ModalReward {reward} profilShow={true} {showModal} on:closeModal={() => (showModal = false)} />
<div
	on:click={() => (showModal = true)}
	class="flex cursor-pointer bg-white w-1/3 hover:shadow-primary transition-all hover:scale-105 ease-in scale-100 px-2 mt-5 relative border border-gray-200  shadow xl:w-[30%] min-h-12 mr-5 py-5 my-5 rounded-lg"
>
	<img src={reward.image} class="w-16 h-16 mx-5" />
	<div class="flex flex-col">
		<p class="text-md mb-2 font-bold">{reward.brand}</p>
		<p class="text-xs mb-2 text-start text-gray-400">{reward.description}</p>
		<p class="text-xs text-start text-gray-300">
			Disponible jusqu'à {moment(reward.date_completed).locale('fr').format('LL')}
		</p>
	</div>
</div>
