<template>
  <div class="search">
    <div class="search__field">
      <input
        type="text"
        name="search"
        placeholder="Поиск по названию картины"
        class="search__input"
        @input="inputSearch"
      >
    </div>
    <div class="search__button">
      <Btn
        btnText="Найти"
      />
    </div>
  </div>
</template>

<script>
import Btn from '@/common-components/Btn.vue'

export default {
  name: 'Search',
  components: {
    Btn
  },
  methods: {
    inputSearch (e) {
      this.$bus.$emit('change-search-value', e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
.search {
  display: flex;
  width: 100%;

  @media screen and (min-width: 1240px) {
    min-width: 416px;
  }
}

.search__field {
  flex: 1;
}

.search__input {
  border: 1px solid #E1E1E1;
  border-right: none;
  box-sizing: border-box;
  outline: none;
  padding: 13px 16px;
  margin: 0;
  line-height: 20px;
  font-size: 14px;
  width: 100%;

  &::placeholder {
    color: #9F9F9F;
  }
}
</style>