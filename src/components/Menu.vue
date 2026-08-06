<script>
export default {
  name: 'Menu',
  created () {
    this.menuList = [
      {
        title: 'Каталог',
        href: '#'
      },
      {
        title: 'Доставка',
        href: '#'
      },
      {
        title: 'Оплата',
        href: '#'
      },
      {
        title: 'Контакты',
        href: '#'
      },
      {
        title: 'О компании',
        href: '#'
      }
    ]
  }
}
</script>

<template>
  <nav class="menu">
    <ul>
      <li
        v-for="{title, href} in menuList"
        :key="title"
      >
        <a :href="href">{{ title }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.menu {
  position: relative;
  padding-bottom: 16px;

  @media screen and (min-width: 1240px) {
    padding-bottom: 0;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 16px;

    @media screen and (min-width: 1240px) {
      flex-wrap: nowrap;
      gap: 48px;
    }
  }

  a {
    text-decoration: none;
    font-size: 14px;
    color: #343030;
    transition: color .2s ease-in-out;

    &:hover {
      color: #000000;
    }
  }
}
</style>