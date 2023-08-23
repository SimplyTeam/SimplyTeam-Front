<script lang="ts">
  import { twMerge } from "tailwind-merge"
</script>

<div
	class={twMerge($$props.class, 'badge', 'py-3 text-primary font-semibold bg-white justify-center text-center w-1/2 xl:w-1/3 text-xs rounded-xl shadow-md border-none')}
>
	<slot />
</div>
