<script lang="ts">
	import proto from '$lib/assets/proto.png';
</script>

<div class="flex flex-col w-full justify-between items-center">
	<span class="text-xl xl:text-2xl animate-fadeIn font-medium w-3/4 text-white mt-12">
		Connectez-vous pour découvrir notre plateforme de gestion de projet gamifiée !
	</span>
	<div class="mx-auto w-3/4 relative bg-contain bg-center bg-no-repeat">
		<div class="w-full h-full absolute top-0 left-0">
			<svg
				class="z-10 w-5/6 mx-auto items-center self-center"
				viewBox="0 0 490 216"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 215.489C0 187.308 6.3371 159.402 18.6495 133.366C30.9619 107.329 49.0085 83.6723 71.7589 63.745C94.5092 43.8177 121.518 28.0105 151.243 17.2259C180.967 6.44131 212.826 0.890564 245 0.890564C277.174 0.890564 309.033 6.44131 338.757 17.2259C368.482 28.0105 395.491 43.8177 418.241 63.745C440.992 83.6724 459.038 107.33 471.35 133.366C483.663 159.402 490 187.308 490 215.489H410.948C410.948 196.401 406.656 177.499 398.316 159.864C389.977 142.228 377.753 126.204 362.343 112.707C346.934 99.2091 328.64 88.5023 308.506 81.1974C288.372 73.8926 266.793 70.1328 245 70.1328C223.207 70.1328 201.628 73.8925 181.494 81.1974C161.361 88.5022 143.066 99.2091 127.657 112.707C112.247 126.204 100.023 142.228 91.6836 159.864C83.3439 177.499 79.0515 196.401 79.0516 215.489H0Z"
					fill="#D9D9D9"
					fill-opacity="0.05"
				/>
			</svg>
		</div>
		<img
			src={proto}
			alt="proto"
			class=" z-50 w-84  mt-[5rem] pb-10 mx-auto border-6 border-white rounded"
		/>
	</div>
	<span class="text-xl xl:text-2xl font-medium w-3/4 mb-12 text-white">
		Prêt à relever des défis passionnants et à transformer la gestion de projet en une aventure
		ludique ?
	</span>
</div>
