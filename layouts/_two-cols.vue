<template>
  <div class="slidev-layout two-cols">
    <h1><slot name="title" /></h1>
    <div class="columns">
      <div class="col-left">
        <slot name="left" />
      </div>
      <div class="col-right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.two-cols {
  display: flex;
  flex-direction: column;
}

h1 {
  padding: 1rem;
}

.columns {
  display: flex;
  flex-grow: 1;
}

.col-left,
.col-right {
  flex-basis: 50%;
  padding: 1rem;
}
</style>
