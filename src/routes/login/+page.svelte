<script lang="ts">
  import image from '$lib/assets/logo.png'
  import proto from '$lib/assets/proto.png'
  import Button from "$lib/components/Button.svelte"

  import { authStore } from '$lib/store/login'
  import type { IUser } from '$lib/store/login'

  const login: IUser = {
    email: '',
    password: '',
  }
  $:hasError = !!$authStore.error;

  const handleLogin = () => {
    authStore.login(login)
  }

</script>

<div class="max-w-screen h-screen bg-white shadow sm:rounded-lg flex justify-center flex-1">
    <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <img
                src={image}
                class="w-20 mx-auto"
        />
        <div class="mt-5 flex flex-col items-center">
            <h1 class="text-xl xl:text-2xl font-bold">
                Bienvenue sur le site de Simply Team !
            </h1>v
            <div class="w-full flex-1 mt-8">
                <div class="flex flex-col items-center">
                    <button
                            class="w-full max-w-sm font-bold shadow-sm rounded-lg py-3 bg-primary text-gray-800
                            flex items-center text-white justify-center transition-all duration-300 ease-in-out focus:outline-none
                            hover:shadow focus:shadow-sm focus:shadow-outline"
                    >
                        <div class="bg-white p-2 rounded-full">
                            <svg class="w-4" viewBox="0 0 533.5 544.3">
                                <path
                                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                        fill="#4285f4"
                                />
                                <path
                                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                        fill="#34a853"
                                />
                                <path
                                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                        fill="#fbbc04"
                                />
                                <path
                                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                        fill="#ea4335"
                                />
                            </svg>
                        </div>
                        <span class="ml-4">
                            Se connecter avec Google
                </span>
                    </button>
                </div>
            </div>
            <div class="my-8 border-b w-full max-w-sm text-center">
                <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Ou avec votre compte
                </div>
            </div>
            <div class="flex flex-col w-full">
                <div class="flex flex-col items-center">
                    <label class="text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input bind:value={login.email} class="w-full max-w-sm px-8 py-4 rounded-lg font-medium bg-indigo-100 border border-gray-200
                    placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
                </div>
                <div class="flex mt-5 flex-col items-center">
                    <label class="text-gray-700 text-sm font-bold mb-2" for="password">
                        Mot de passe
                    </label>
                    <input bind:value={login.password} class="w-full max-w-sm px-8 py-4 rounded-lg font-medium bg-indigo-100 border border-gray-200
                    placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
                </div>
                <div class="flex w-full max-w-sm justify-end items-center self-center">
                    <a href="#" class="text-sm text-gray-500 hover:text-primary">
                        Mot de passe oublié ?
                    </a>
                </div>
                <div class="flex flex-col items-center">
                    <Button on:click={handleLogin} class="w-full max-w-sm mt-5">Se connecter</Button>
                    <div class="flex justify-center w-full max-w-sm items-center mt-6">
                        <span class="text-sm xl:text-md mr-3"> Pas de compte ? </span>
                        <a href="#" class="text-sm text-gray-500 hover:text-primary">
                            S'inscrire!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex-1 bg-primary text-center hidden lg:flex">
        <div class="flex flex-col w-full justify-between items-center">
            <span class="text-xl xl:text-2xl font-light w-3/4 text-white mt-12">
                Connectez-vous pour découvrir notre plateforme de gestion
                de projet gamifiée !
            </span>
            <div class="mx-auto w-3/4 relative bg-contain bg-center bg-no-repeat">
                <div class="w-full h-full absolute top-0 left-0">
                    <svg class="z-10 w-5/6 mx-auto items-center self-center" viewBox="0 0 490 216" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 215.489C0 187.308 6.3371 159.402 18.6495 133.366C30.9619 107.329 49.0085 83.6723 71.7589 63.745C94.5092 43.8177 121.518 28.0105 151.243 17.2259C180.967 6.44131 212.826 0.890564 245 0.890564C277.174 0.890564 309.033 6.44131 338.757 17.2259C368.482 28.0105 395.491 43.8177 418.241 63.745C440.992 83.6724 459.038 107.33 471.35 133.366C483.663 159.402 490 187.308 490 215.489H410.948C410.948 196.401 406.656 177.499 398.316 159.864C389.977 142.228 377.753 126.204 362.343 112.707C346.934 99.2091 328.64 88.5023 308.506 81.1974C288.372 73.8926 266.793 70.1328 245 70.1328C223.207 70.1328 201.628 73.8925 181.494 81.1974C161.361 88.5022 143.066 99.2091 127.657 112.707C112.247 126.204 100.023 142.228 91.6836 159.864C83.3439 177.499 79.0515 196.401 79.0516 215.489H0Z"
                              fill="#D9D9D9" fill-opacity="0.05"/>
                    </svg>
                </div>
                <img src={proto}
                     class=" z-50 w-84  mt-[5rem] pb-10 mx-auto border-6 border-white rounded"
                />
            </div>
            <span class="text-xl xl:text-2xl font-light w-3/4 mb-12 text-white">
               Prêt à relever des défis passionnants et à transformer la gestion de projet en une aventure ludique ?
            </span>
        </div>
    </div>

</div>