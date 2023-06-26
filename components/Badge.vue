<template>
  <div
    :style="{
      width: 'max-content',
      borderRadius: '0.5rem',
      padding: padded ? '0.5rem 1rem' : '',
      backgroundColor: {
        red: '#330000',
        green: '#003300',
        blue: '#000033',
      }[color],
      color: {
        red: '#ffaaaa',
        green: '#aaffaa',
        blue: '#aaaaff',
      }[color],
    }"
  >
    <!-- @slot default slot content -->
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    /**
     * Whether or not your badge has padding
     */
    padded: boolean;
    /**
     * Whether or not your badge has padding
     */
    color: 'red' | 'green' | 'blue';
    /**
     * Badge content
     */
    content?: string;
  }>(),
  {
    padded: true,
    color: 'green',
    content: 'hello world',
  }
);
</script>
