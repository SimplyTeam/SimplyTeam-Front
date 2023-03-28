<script lang="ts">
  import AuthDescription from "./components/AuthDescription.svelte"
  </script>
  
  <div class="max-w-screen h-screen bg-white shadow sm:rounded-lg flex justify-center flex-1">
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <slot></slot>
      </div>
      <div class="flex-1 bg-primary text-center hidden lg:flex">
  <AuthDescription></AuthDescription>
      </div>
  </div>
