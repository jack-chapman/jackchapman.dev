<template>
  <div
    class="flex flex-col py-4 px-5 font-mono border-2 border-pale w-[320px] h-[240px] lg:(w-auto h-auto)"
  >
    <h2 class="text-pale text-xl"><slot name="title" /></h2>
    <section class="mt-2 lg:mt-4 text-pale leading-6 lg:leading-7">
      <slot />
    </section>
  </div>
</template>
