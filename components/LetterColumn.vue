<template>
  <div class="overflow-hidden h-60 lg:h-75 relative w-full">
    <ul class="absolute left-0 custom-animation w-full">
      <li
        v-for="(char, i) of fullList"
        :key="i"
        :class="bg()"
        class="text-pale h-20 lg:h-25 font-mono list-none grid place-items-center w-full border border-pale transition-colors"
      >
        <h2 class="text-4xl">
          {{ char }}
        </h2>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { random } from 'lodash-es';

const props = defineProps({
  chars: {
    type: Array as PropType<string[]>,
    required: true,
  },
  delay: String,
});

const fullList = ref([...props.chars, ...props.chars, ...props.chars]);

const bg = () => {
  const num = [1, 2, 3][Math.floor(random(0, 2))];
  return {
    'hover:(bg-blush text-clay)': num === 3,
    'hover:(bg-cloud text-clay)': num === 2,
    'hover:(bg-pale text-clay)': num === 1,
  };
};
</script>

<style lang="scss" scoped>
.custom-animation {
  animation-name: slidein-small;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-delay: v-bind(delay);
  @media (min-width: 1024px) {
    animation-name: slidein;
  }
}
@keyframes slidein {
  0% {
    bottom: 0px;
  }

  10% {
    bottom: -600px;
  }

  100% {
    bottom: -600px;
  }
}
@keyframes slidein-small {
  0% {
    bottom: 0px;
  }

  10% {
    bottom: -480px;
  }

  100% {
    bottom: -480px;
  }
}
</style>
