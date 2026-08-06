<template>
<div class="footer-info">
  <div class="footer-info__item">
    <Icon
      icon-name="phone"
    />
    <a href="tel:+78125555555">+7 (812) 555-55-55</a>
  </div>
  <div class="footer-info__item">
    <Icon
      icon-name="address"
    />
    <span>г. Санкт-Петербург, ул. Ефимова, 3</span>
  </div>
</div>
</template>

<script>
import Icon from '@/common-components/Icon.vue'

export default {
  name: 'FooterInfo',
  components: {
    Icon
  }
}
</script>

<style scoped>
.footer-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 1240px) {
    flex-direction: row;
    gap: 50px;
  }
}

.footer-info__item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #555;

  a, span {
    color: inherit;
    text-decoration: none;
    outline: none;
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>