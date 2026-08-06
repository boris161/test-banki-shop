<template>
  <transition name="modal">
    <div class="modal-overlay" @click.self="close">
      <div class="product-detail">
        <div class="modal-close" @click="close">
          <Icon
            icon-name="close"
            width="24"
            height="24"
          />
        </div>
        <div class="product-detail__content">
          <h2 class="product-detail__title">
            <span>{{ item.author }}</span>
            <span>«{{ item.title }}»</span>
          </h2>
          <div class="product-detail__gallery">
            <div class="swiper">
              <div class="swiper-wrapper">
                <div
                    class="swiper-slide"
                    v-for="img in item.gallery"
                    :key="img"
                >
                  <div class="slide-item">
                    <img
                      :src="img"
                      :alt="img"
                      class="product-detail__gallery-image"
                    >
                  </div>
                </div>
              </div>
              <div class="swiper-button-prev" />
              <div class="swiper-button-next" />
            </div>

          </div>
          <div class="product-detail__description">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Swiper from 'swiper/bundle'
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle'

import Icon from '@/common-components/Icon.vue'

export default {
  name: 'ProductDetail',
  components: {
    Icon
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', this.handleEscape)

    new Swiper('.swiper', {
      modules: [ Navigation ],
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
  methods: {
    close () {
      this.$emit('close')
    },
    handleEscape (event) {
      if (event.key === 'Escape') {
        this.close()
      }
    }
  },
  unmounted () {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', this.handleEscape)
  }
}
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}

.modal-close {
  position: absolute;
  top: 8px;
  right: 8px;

  .icon {
    cursor: pointer;
  }
}

.product-detail {
  background: #FFFFFF;
  border-radius: 16px;
  max-width: 100%;
  padding: 24px 16px;

  @media screen and (min-width: 1240px) {
    max-width: 600px;
    padding: 24px;
  }
}

.product-detail__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 20px;
}

.product-detail__description {
  font-size: 14px;
  margin-top: 24px;
}

.product-detail__gallery {
  position: relative;
  overflow: hidden;
}

.product-detail__gallery-image {
  width: 100%;
}

.swiper {
  overflow: hidden;
  width: 100%;
}

.swiper-wrapper {
  display: flex;
  will-change: transform;
  transition-timing-function: ease-in-out;
}

.swiper-button-prev,
.swiper-button-next {
  color: #FFFFFF;
  background: rgba(0, 0, 0, .5);
  padding-block: 8px;
}
</style>