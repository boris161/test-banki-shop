<template>
<header>
  <HorizontalSide>
    <template #left>
      <Menu />
    </template>
    <template #right>
      <Search />
    </template>
  </HorizontalSide>
</header>
</template>

<script>
import HorizontalSide from '@/common-components/HorizontalSide.vue'
import Menu from '@/components/Menu.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'Header',
  components: {
    HorizontalSide,
    Menu,
    Search
  }
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #E1E1E1;
  padding: 16px;

  @media screen and (min-width: 1240px) {
    height: 96px;
    padding: 0;
  }
}
</style>
