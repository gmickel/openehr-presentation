<template>
  <div class="slidev-layout intro">
    <div class="intro-content">
      <h1><slot /></h1>
      <div class="intro-description">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding: 2rem;
  background-image: linear-gradient(
    to right bottom,
    var(--slidev-theme-primary),
    var(--slidev-theme-secondary)
  );
  color: white;
}

.intro-content {
  max-width: 70%;
}

h1 {
  font-size: 3.5em;
  margin-bottom: 0.5em;
}

.intro-description {
  font-size: 1.5em;
  font-weight: 300;
}
</style>
