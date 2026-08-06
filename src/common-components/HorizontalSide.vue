<template>
<div class="horizontal-side-wrapper">
  <div class="horizontal-side-wrapper__left">
    <slot name="left" />
  </div>
  <div class="horizontal-side-wrapper__right">
    <slot name="right" />
  </div>
</div>
</template>

<script>

export default {
  name: 'HorizontalSide'
}
</script>

<style scoped lang="scss">
.horizontal-side-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  max-width: 1216px;

  @media screen and (min-width: 1240px) {
    flex-direction: row;
  }
}

.horizontal-side-wrapper__left {
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1240px) {
    padding-inline: 96px 48px;
  }

  header & {
    display: none;

    @media screen and (min-width: 1240px) {
      display: flex;
    }
  }
}

.horizontal-side-wrapper__right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 1240px) {
    width: auto;
  }
}
</style>