<template>
<div class="product-list">
  <ProductCard
    v-for="item in list"
    :key="item.id"
    :item="item"
  />
</div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.product-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 16px;
  column-gap: 32px;

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1240px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>