<script lang="ts">
    export let illustration: string
    export let title: string
    export let subtitle: string
</script>

<div class="min-h-full flex flex-col w-full  pt-16">
    <div class="">
        
    </div>
    <div class="flex gap-4 h-28 bg-gradient-to-r from-primary to-secondary">
        <img src={illustration} alt="header illustration" class="w-24 h-24" />
        <div class="h-full py-1">
            <h2 class="text-4xl mb-1 font-bold text-white">{title}</h2>
            <p class="text-sm max-w-lg text-white">{subtitle}</p>
        </div>
    </div>
    <div class="bg-base-400 flex-1 p-8">
        <slot />
    </div>
</div>