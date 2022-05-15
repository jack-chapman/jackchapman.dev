<template>
  <div
    class="grid grid-cols-[repeat(4,100px)] grid-rows-[repeat(3,100px)] border border-pale"
  >
    <LetterColumn :chars="['J', 'C', 'M']" delay="0ms" />
    <LetterColumn :chars="['A', 'H', 'A']" delay="500ms" />
    <LetterColumn :chars="['C', 'A', 'N']" delay="230ms" />
    <LetterColumn :chars="['K', 'P', '.']" delay="100ms" />
  </div>
</template>
