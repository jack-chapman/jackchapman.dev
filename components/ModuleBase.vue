<template>
  <div class="flex flex-col py-4 px-5 font-mono border-2 border-pale">
    <h2 class="text-pale text-xl"><slot name="title" /></h2>
    <section class="mt-4 text-pale leading-7">
      <slot />
    </section>
  </div>
</template>
