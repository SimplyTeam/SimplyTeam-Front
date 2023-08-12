<script lang="ts">
	import type { IQuest } from '$lib/models/quest'
	export let award: IQuest
	import moment from 'moment-with-locales-es6'

	import 'moment/locale/fr' // Importe la localisation française
	moment.locale('fr')
	function badgeIllustration(image: string, grade: string): string {
		const badge = image.split('.')[0]
		return `/quest/${badge}-${grade}.svg`
	}
</script>

<div
	class="flex bg-white w-1/3 hover:shadow-primary transition-all hover:scale-105 ease-in scale-100 px-2 mt-5 relative border border-gray-200  shadow xl:w-[30%] min-h-12 mr-5 py-5 my-5 rounded-lg"
>
	<img src={badgeIllustration(award.image, award.grade)} alt={award.name} class="w-28 h-28" />
	<div class="flex flex-col">
		<p class="text-md mb-2 font-bold">{award.name}</p>
		<p class="text-xs mb-2 text-start text-gray-400">{award.description}</p>
		<p class="text-xs text-start text-gray-300">
			Débloqué le {moment(award.date_completed).locale('fr').format('LL')}
		</p>
	</div>
</div>
