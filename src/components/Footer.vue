<template>
<footer>
  <HorizontalSide>
    <template #left>
      <Menu />
    </template>
    <template #right>
      <FooterInfo />
    </template>
  </HorizontalSide>
</footer>
</template>

<script>
import Menu from '@/components/Menu.vue'
import FooterInfo from '@/components/FooterInfo.vue'
import HorizontalSide from '@/common-components/HorizontalSide.vue'

export default {
  name: 'Footer',
  components: {
    Menu,
    FooterInfo,
    HorizontalSide
  }
}
</script>

<style scoped>
footer  {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ECEAEA;
  margin-top: auto;
  padding: 16px;

  @media screen and (min-width: 1240px) {
    height: 96px;
    padding: 0;
  }
}
</style>