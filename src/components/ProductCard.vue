<template>
  <div
    class="product-card"
    :class="{ 'inactive': !item.price && !isOpenDetail }"
  >
    <div
      class="product-card__img"
      @click="toggleDetail"
    >
      <img
        :src="item.img"
        :alt="item.title"
      />
    </div>

    <div class="product-card__info">
      <h3
        class="product-card__title"
        @click="toggleDetail"
      >
        <span>«{{ item.title }}»</span>
        <span>{{ item.author }}</span>
      </h3>

      <div
        v-if="item.price"
        class="product-card__sale"
      >
        <div class="product-card__price">
          <div
            v-if="item.discount"
            class="product-card__price--old"
          >
            {{ item.price }} $
          </div>
          <div class="product-card__price--current">
            {{ discountPrice }} $
          </div>
        </div>
        <div
          class="product-card__buy"
          :class="{ 'in-cart': inCart }"
        >
          <Btn
            :btn-icon-name="btnIcon"
            :btnText="btnText"
            :is-active="inCart"
            :is-disabled="isLoading"
            :is-loading="isLoading"
            @click="clickBuy"
          />
        </div>
      </div>
      <div
        v-else
        class="product-card__closed"
      >
        Продана на аукционе
      </div>
    </div>

    <ProductDetail
      v-if="isOpenDetail"
      :item="item"
      @close="toggleDetail"
    />
  </div>
</template>

<script>
import Btn from '@/common-components/Btn.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import { localStorageMixin } from '@/mixins/localStorageMixin'

const ITEMS_IN_CART = 'cart'

export default {
  name: 'ProductCard',
  mixins: [localStorageMixin],
  components: {
    Btn,
    ProductDetail
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      inCart: false,
      isLoading: false,
      isOpenDetail: false
    }
  },
  computed: {
    discountPrice () {
      return this.item.price - this.item.discount
    },
    btnText () {
      if (this.isLoading) {
        return !this.inCart ? 'Убираем' : 'Добавляем'
      }

      return !this.inCart ? 'Купить' : 'В корзине'
    },
    btnIcon () {
      return !this.inCart ? '' : 'check'
    }
  },
  mounted() {
    this.inCart = this.checkInCart(this.item.id)
  },
  methods: {
    toggleDetail () {
      this.isOpenDetail = !this.isOpenDetail
    },
    clickBuy () {
      if (this.isLoading) {
        return
      }

      this.inCart = !this.inCart

      this.setLoader()

      this.changeCart(this.item.id)
    },
    changeCart (id) {
      const currentCArtSate = this.getItemStorage(ITEMS_IN_CART)

      if (!currentCArtSate) {
        this.setItemStorage(ITEMS_IN_CART, [id])

        return
      }

      if (currentCArtSate.includes(id)) {
        const index = currentCArtSate.indexOf(id)

        if (index !== -1) {
          currentCArtSate.splice(index, 1)
        }

        this.setItemStorage(ITEMS_IN_CART, currentCArtSate)

        return
      }

      currentCArtSate.push(id)

      this.setItemStorage(ITEMS_IN_CART, currentCArtSate)
    },
    checkInCart (id) {
      const currentCArtSate = this.getItemStorage(ITEMS_IN_CART)

      if (!currentCArtSate) {
        return false
      }

      return currentCArtSate.includes(id)
    },
    setLoader () {
      this.isLoading = true

      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    }
  }
}
</script>

<style scoped lang="scss">
.product-card {
  border: 1px solid #E1E1E1;

  &.inactive {
    opacity: 0.5;
  }
}

.product-card__img {
  position: relative;
  overflow: hidden;
  height: 160px;
  cursor: pointer;
  border-bottom: 1px solid #E1E1E1;

  img {
    min-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 1240px) {
      min-height: 100%;
      min-width: 0;
    }
  }
}

.product-card__info {
  padding: 20px 24px 24px;
}

.product-card__title {
  cursor: pointer;
  margin-bottom: 22px;
  font-size: 16px;
  line-height: 1.5;

  span {
    display: block;
  }

  @media screen and (min-width: 1240px) {
    font-size: 18px;
  }
}

.product-card__sale {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-card__price {
  position: relative;

  &--old, &--current {
    font-size: 14px;
    line-height: 1.5;
  }

  &--old {
    font-weight: 300;
    color: #A0A0A0;
    text-decoration: line-through;
  }

  &--current {
    font-weight: 700;
    color: #343030;
  }
}

.product-card__buy {
  flex: 1;
  max-width: 112px;

  &.in-cart {
    max-width: 118px;
  }

  .btn {
    width: 100%;
    padding-inline: 0;
  }
}

.product-card__closed {
  display: flex;
  align-items: center;
  min-height: 48px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #343030;
}
</style>