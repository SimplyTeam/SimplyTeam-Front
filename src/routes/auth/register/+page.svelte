<script lang="ts">
  import image from '$lib/assets/logo.png'
  import Button from '$lib/components/Button.svelte'

  import Input from '$lib/components/Input.svelte'
  import {enhance} from '$app/forms'
  import type {ActionData} from './$types'
  import Toast from '$lib/components/Toast.svelte'
  
  interface IUser {
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
  }
  export let form: ActionData
  let login: IUser = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  let loading = false
  const showToast = (messageToast: string, themeToast: string) => {
    const message = messageToast
    const duration = 4000
    const theme = themeToast
    const position = 'top-right'

    new Toast({
      target: document.body,
      props: {message, duration, theme, position}
    })
  }

  let otherField: boolean = false;
  const checkOtherField = () => {
    otherField = login.name !== '' && login.email !== ''
  };
  // computed qui permet de check si tous les champs sont remplis
  $:isFilled = Object.values(login).every(value => value !== '')
  $:isFilledNameAndEmail = login.name !== '' && login.email !== ''

</script>
<img alt="logo" src={image} class="w-20 mx-auto"/>
<div class="mt-5 flex flex-col items-center">
    <h1 class="text-xl xl:text-2xl font-bold">Bienvenue sur SimplyTeam !</h1>
    <div class="w-full flex-1 mt-8">
        <div class="flex flex-col items-center">
            <button
                    class="w-full btn btn-primary max-w-sm font-bold shadow-sm rounded-lg bg-primary text-gray-800
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
                <span class="ml-4"> S'inscrire avec Google </span>
            </button>
        </div>
    </div>
    <div class="my-8 border-b w-full max-w-sm text-center">
        <div
                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
        >
            Ou avec votre compte
        </div>
    </div>
    <div class="flex flex-col w-full">
        <form method="POST" action="?/register" use:enhance={() => {
			loading = true;
			return async ({ update }) => {
				await update();
				loading = false;
                if (form?.errors) {
                    showToast('Une erreur est survenue', 'error')
                } else {
                    showToast('Bienvenue', 'success')
                }
			}
		}}>
            <div class:hidden={otherField}>
                <div class="flex flex-col items-center">
                    <Input errorMessage="{form?.errors?.email}" name="email" bind:value={login.email} type="email"
                           placeholder="Email" fieldName={'email'}/>
                </div>
                <div class="flex mt-5 flex-col items-center">
                    <Input errorMessage="{form?.errors?.name}" name="name" bind:value={login.name} type="text"
                           placeholder="Nom d'utilisateur" fieldName={'name'}/>
                </div>
                <div class="flex flex-col items-center">
                    <Button on:click={checkOtherField}
                            class="{ isFilledNameAndEmail ? 'w-full max-w-sm mt-5' : ' btn-disabled w-full max-w-sm mt-5' }">
                        Continuer
                    </Button>
                    <div class="flex justify-center w-full max-w-sm items-center mt-6">
                        <span class="text-sm xl:text-md mr-3"> Déjà un compte ? </span>
                        <a href="/auth/login" class="text-sm text-gray-500 hover:text-primary"> Se connecter! </a>
                    </div>
                </div>
            </div>
            <div class:hidden={!otherField}>
                <div class="flex mt-5 flex-col items-center">
                    <Input errorMessage="{form?.errors?.password}" name="password" bind:value={login.password}
                           type="password" placeholder="Mot de passe" fieldName={'password'}/>
                </div>
                <div class="flex mt-5 flex-col items-center">
                    <Input errorMessage="{form?.errors?.confirmPassword}"
                           bind:value={login.confirmPassword}
                           name="confirmPassword"
                           type="password"
                           placeholder="Confirmer votre mot de passe"
                    />
                </div>
                <div class="flex flex-col">
                    <div class="flex justify-center">
                        <Button on:click={() => otherField = !otherField} class=" w-1/3 btn-accent mr-10 mt-5">retour
                        </Button>
                        <Button type="submit" class="{isFilled ? 'w-1/3 mt-5' : 'btn-disabled w-1/3 mt-5'}">S'inscrire
                        </Button>
                    </div>
                    <div class="flex justify-center w-zfull max-w-sm items-center mt-6">
                        <span class="text-sm xl:text-md mr-3"> Déjà un compte ? </span>
                        <a href="/auth/login" class="text-sm text-gray-500 hover:text-primary"> Se connecter! </a>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
