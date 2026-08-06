<template>
  <button
    :disabled="isDisabled"
    class="btn"
    :class="{
      'active': isActive,
      'loading': isLoading
    }"
    @click="$emit('click')"
  >
  <Icon
    v-if="isIconVisible"
    :icon-name="currentIconName"
  />
  <span class="btn__text">
    {{ btnText }}
  </span>
  </button>
</template>

<script>
import Icon from '@/common-components/Icon.vue'

export default {
  name: 'btn',
  components: {
    Icon
  },
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    btnIconName: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      required: true
    }
  },
  computed: {
    isIconVisible () {
      return this.isLoading || this.btnIconName
    },
    currentIconName () {
      return this.isLoading ? 'loader' : this.btnIconName
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: 14px 28px;
  margin: 0;
  gap: 4px;
  border: none;
  background: #403432;
  color: #FFFFFF;
  cursor: pointer;
  transition: opacity .2s ease-in-out;

  &:disabled {
    cursor: default;
    opacity: 1 !important;
    background: #C1B4B1 !important;
  }

  &.active {
    background: #5B3A32;
  }

  &:hover {
    opacity: 0.9;
  }

  &.loading .icon {
    animation: loading 1s infinite linear;
  }
}

.btn__text {
  font-family: "Merriweather", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  line-height: 20px;
  font-weight: 700;
  font-size: 14px;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>