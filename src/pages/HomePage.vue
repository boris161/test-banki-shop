<template>
  <div class="page">
    <Header />
    <div class="content-wrapper">
      <div class="content">
        <h1>Картины эпохи Возрождения</h1>
        <ProductList
          :list="productList"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ProductList from '@/components/ProductList.vue'

import { searchMixin } from '@/mixins/searchMixin'

export default {
  name: 'home-page',
  mixins: [searchMixin],
  components: {
    Header,
    Footer,
    ProductList
  },
  created () {
    this.list = [
      {
        id: 1,
        title: 'Рождение Венеры',
        author: 'Сандро Боттичелли',
        description: 'При клике на название/изображение товара должно открываться модальное окно с карточкой товара.',
        price: '2000000',
        discount: '1000000',
        img: '/img/1.jpg',
        gallery: [
          '/img/1.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/4.jpg'
        ]
      },
      {
        id: 2,
        title: 'Тайная вечеря',
        author: 'Леонардо да Винчи',
        description: 'Отображение состояний визуально оформить, напр. "preloader icon", "purchase icon", "checked icon", и т.п.',
        price: '3000000',
        discount: '',
        img: '/img/2.jpg',
        gallery: [
          '/img/2.jpg',
          '/img/1.jpg',
          '/img/3.jpg',
          '/img/4.jpg'
        ]
      },
      {
        id: 3,
        title: 'Сотворение Адама',
        author: 'Микеланджело',
        description: 'Также можно выложить проект на хостинг, и прикрепить ссылку на работающее приложение в README.md или e-mail.',
        price: '6000000',
        discount: '1000000',
        img: '/img/3.jpg',
        gallery: [
          '/img/3.jpg',
          '/img/2.jpg',
          '/img/1.jpg',
          '/img/4.jpg'
        ]
      },
      {
        id: 4,
        title: 'Урок анатомии',
        author: 'Рембрандт',
        description: 'При работе над заданием обязательно использование средств автоматизации (webpack или gulp). Конфигурация должна корректно работать на 16 версии Node.js',
        price: '',
        discount: '',
        img: '/img/4.jpg',
        gallery: [
          '/img/4.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/1.jpg'
        ]
      }
    ]

    this.$bus.$on('change-search-value', this.filterProducts)
  },
  data () {
    return {
      searchValue: '',
      list: []
    }
  },
  computed: {
    productList () {
      if (!this.searchValue) {
        return this.list
      }

      return this.filterList(this.searchValue, this.list, ['title', 'author'])
    }
  },
  methods: {
    filterProducts (val) {
      this.searchValue = val
    }
  },
  beforeUnmount () {
    this.$bus.$off('change-search-value', this.filterProducts)
  }
}
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
}

.content-wrapper {
  display: flex;
  justify-content: center;
  padding: 16px;

  @media screen and (min-width: 1240px) {
    padding: 0;
  }
}

.content {
  width: 100%;
  max-width: 1216px;
}

h1 {
  font-size: 20px;
  line-height: 1.5;
  color: #343030;
  margin-block: 16px;

  @media screen and (min-width: 1240px) {
    font-size: 24px;
    margin-block: 44px 40px;
  }
}
</style>