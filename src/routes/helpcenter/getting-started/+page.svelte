<script lang="ts">
	export let page = 1
	import { onMount } from 'svelte'
</script>

<div
	class="w-full flex flex-col items-center bg-primary mt-10 pt-10 flex justify-center items-center"
>
	<img class="w-32 h-32" src="/CGU.png" alt="Illustration FAQ" />
	<h1 class="text-3xl font-bold text-white">Débuter sur SimplyTeam</h1>
	<h2 class="text-lg text-gray-300 w-1/2 text-center break-words mb-10">
		<div>Suivez ce guide pour tout savoir sur SimplyTeam!</div>
	</h2>
</div>
<div class="h-screen top-16 overflow-hidden md:flex">
	<!-- sidebar -->
	<div
		class="sidebar text-black w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
	>
		<!-- logo -->
		<a href="#" class="text-secondary flex items-center space-x-2 px-4">
			<svg
				class="w-8 h-8"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
				/>
			</svg>
			<span class="text-2xl font-extrabold">Commencer</span>
		</a>

		<!-- nav -->
		<nav>
			<a
				href="#learn"
				class="block py-2.5 px-6 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
			>
				Bien comprendre SimplyTeam
			</a>
			<a
				href="#login"
				class="block py-2.5 px-6 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
			>
				Inscription et connexion
			</a>
			<a
				href="#workspace"
				class="block py-2.5 px-6 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
			>
				Gestion des workspaces
			</a>
			<a
				href="#taskAndObjectifs"
				class="block py-2.5 px-6 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
			>
				Validation des tâches et des objectifs
			</a>
		</nav>
	</div>
	<div class="divider lg:divider-horizontal" />

	<!-- content -->
	<div class="p-10 w-7/12 text-justify overflow-y-auto">
		<div class="flex flex-col">
			<h1 class="text-3xl font-bold text-gray-900" id="learn">Bien comprendre SimplyTeam</h1>
			<div class="divider" />
			<h2 class="text-md text-gray-500 break-words mb-10">
				<div class="mt-2 flex flex-col">
					<span
						>SimplyTeam est une application de gestion de projet qui vous permet de gérer vos
						projets avec plaisir et simplement ! Cette application est conçue pour vous aider à
						rester productif tout en vous amusant.</span
					>
					<span class="mt-2">
						Le système de gamification vous permet de gagner des points d'expériences en validant
						des tâches et des objectifs. Plus vous gagnez d'expériences, plus vous montez en niveau
						et plus vous débloquez des badges.
					</span>
					<span class="mt-2"
						>Avec SimplyTeam, vous pouvez créer des workspaces et inviter des membres à rejoindre
						vos workspaces. Vous pouvez créer des projets et des tâches dans vos workspaces. Invitez
						des membres à rejoindre vos projets et assignez-leur des tâches.
					</span>
				</div>
			</h2>
		</div>
		<div class="flex flex-col">
			<h1 class="text-3xl font-bold text-gray-900" id="login">Inscription et connexion</h1>
			<div class="divider" />
			<h2 class="text-md text-gray-500 break-words mb-10">
				<div class="flex flex-col">
					<span>
						Pour vous inscrire ou pour vous connecter à SimplyTeam, vous avez deux possibilités :
					</span>
					<div class="flex flex-col">
						<span class="mt-2 text-2xl text-black"> Avec votre compte Google </span>
						<div class="divider" />
						<span class="mt-2"
							>Pour vous connecter avec votre compte Google, cliquez sur le bouton <span
								class="text-primary font-bold">Se connecter avec google"</span
							>. Vous serez redirigé vers la page de connexion de Google. Entrez votre email et
							votre mot de passe.
						</span>
						<img class="h-1/2" src="/login.png" alt="Illustration FAQ" />
						<span class="mt-2">
							Avec votre compte Google, vous pouvez vous connecter et vous inscrire à SimplyTeam. Le
							nom d'utilisateur sera votre nom Google et l'email sera votre email Google.
						</span>
					</div>
					<div class="flex flex-col">
						<span class="mt-2 text-2xl text-black"> Avec un compte SimplyTeam</span>
						<div class="divider" />
						<span class="mt-2">
							Pour vous connecter avec votre compte SimplyTeam, cliquez sur le bouton <span
								class="text-primary font-bold">Se connecter</span
							> et entrez votre email et votre mot de passe.
						</span>
						<img class="h-1/2" src="/loginWithAccount.png" alt="Illustration FAQ" />
						<span class="mt-2">
							Pour l'inscription, cliquez sur le bouton <span class="text-primary font-bold"
								>S'inscrire</span
							> et entrez votre nom d'utilisateur, votre email et votre mot de passe.
						</span>
						<span class="mt-2">
							Pour le mot de passe, il doit contenir au moins 8 caractères, une majuscule, une
							minuscule et un chiffre.
						</span>
						<span class="mt-2">
							Une fois votre compte créer, vous serez redirigez sur l'interface de gestion des
							espaces de travail</span
						>
					</div>
				</div>
			</h2>
		</div>
		<div class="flex flex-col">
			<h1 class="text-3xl font-bold text-gray-900" id="workspace">Gestion des workspaces</h1>
			<div class="divider" />
			<h2 class="text-md text-gray-500 break-words mb-10">
				<div class="flex flex-col">
					<span class="mt-2"
						>Une fois connecter à SimplyTeam, vous serez redirigé vers l'interface de gestion des
						espaces de travail. Vous pouvez créer des workspaces ou rejoindre des espaces de travail
						existants. Vous aurez aussi accès à vos espaces de travail.</span
					>
					<span class="mt-2">Vos espaces de travail seront affiché avec une petite couronne.</span>
					<img class="h-1/2 mt-2" src="/menuWorkspace.png" alt="Illustration FAQ" />
					<span class="mt-2">
						Les espaces de travail que vous avez rejoint seront affiché sans couronne.</span
					>
					<span class="mt-2"
						>Par la suite, vous pouvez cliquez sur un workspace existants pour le rejoindre. Sinon
						vous pouvez en créer un en cliquant sur "créer un espace de travail"
					</span>
					<span class="mt-2"
						>Pour la création d'un workspace, vous aurez besoin d'un nom pour l'espace de travail,
						un description et la possibilité d'ajouter des membres avec leurs emails</span
					>
					<span class="mt-2"
						>Une fois votre workspace créé, vous serez redirigé vers l'interface de gestion des
						projets.</span
					>
					<img class="h-1/2 mt-2" src="/createWorkspace.png" alt="Illustration FAQ" />
				</div>
			</h2>
		</div>
		<div class="flex flex-col">
			<h1 class="text-3xl font-bold text-gray-900" id="taskAndObjectifs">
				Validation des tâches et des objectifs
			</h1>
			<div class="divider" />
			<div class="text-md text-gray-500 break-words mb-10">
				<div class="flex flex-col">
					<span class="mt-2">
						Une fois dans votre espace de travail, vous pouvez créer des projets et des tâches. Pour
						créer un projet, cliquez sur le bouton <span class="text-primary font-bold"
							>Ajouter un projet</span
						> et entrez un nom et une description pour votre projet.
					</span>
					<img class="h-1/2 mt-2" src="/createProjet.png" alt="Illustration FAQ" />
					<span class="mt-2">
						Quand votre projet est créé, vous pouvez créer des sprints. Pour créer un sprint,
						cliquez sur le bouton <span class="text-primary font-bold">Ajouter un sprint</span> et entrez
						un nom et une description pour votre sprint avec une deadline.
					</span>
					<span class="mt-2">
						Dans un projet, vous aurez 3 sous catégories:
						<ul class="list-disc">
							<li class="mx-3">Sprints</li>
							<li class="mx-3">Mes tâches</li>
							<li class="mx-3">Backlog</li>
						</ul>
					</span>
					<span class="mt-2"
						>La création de tâche se fait dans les sprints ou dans le backlog. Pour créer une tâche,
						cliquez sur le bouton <span class="text-primary font-bold">Ajouter une tâche</span>
						Sur la création d'une tâche, vous aurez besoin d'un nom, d'une description, d'une deadline,
						d'une difficulté et d'une priorité. Vous pouvez mettre un commentaire et assigné une ou plusieurs
						personnes à la tâche.
					</span>
					<img class="h-1/2 mt-2" src="/createTask.png" alt="Illustration FAQ" />
				</div>
				<div class="flex flex-col mt-2">
					<span class="mt-2 text-2xl text-black"> Quêtes et objectifs </span>
					<div class="divider" />
					<span class="mt-2">
						Pour les quêtes, vous aurez plusieurs niveaux pour une quête. Vous aurez selon la quête
						un objectif à atteindre. Vous avez plusieurs types de quêtes:
					</span>
					<ul class="list-disc mt-2">
						<li class="mx-3">Quêtes globales</li>
						<li class="mx-3">Quêtes de sprint</li>
						<li class="mx-3">Quêtes des tâches</li>
					</ul>
					<span class="mt-2">
						Chaques quêtes fini vont donneront un nombre d'expériences définis. Cela vous permettra
						de monté de niveau.
					</span>
					<img class="h-1/2 mt-2" src="/questMenu.png" alt="Illustration FAQ" />
				</div>
			</div>
		</div>
	</div>
</div>
