<template>
  <div class="slidev-layout statement">
    <div class="statement-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.statement {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: var(--slidev-theme-primary);
  color: white;
}

.statement-content {
  text-align: center;
  font-size: 2.5em;
  font-weight: bold;
  padding: 2rem;
}
</style>
