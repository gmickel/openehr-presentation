<template>
  <div class="scrollable-code">
    <slot></slot>
  </div>
</template>

<style scoped>
.scrollable-code {
  max-height: 400px;
  overflow-y: auto;
  background-color: var(--slidev-code-background);
  color: var(--slidev-code-foreground);
  font-family: var(--slidev-code-font-family);
  font-size: var(--slidev-code-font-size);
  line-height: var(--slidev-code-line-height);
}

.scrollable-code::-webkit-scrollbar {
  width: 8px;
}

.scrollable-code::-webkit-scrollbar-track {
  background: transparent;
}

.scrollable-code::-webkit-scrollbar-thumb {
  background-color: var(
    --slidev-scrollbar-thumb-color,
    rgba(255, 255, 255, 0.1)
  );
  border-radius: 4px;
  border: 2px solid var(--slidev-code-background);
}

.scrollable-code::-webkit-scrollbar-thumb:hover {
  background-color: var(
    --slidev-scrollbar-thumb-color-hover,
    rgba(255, 255, 255, 0.2)
  );
}
</style>
