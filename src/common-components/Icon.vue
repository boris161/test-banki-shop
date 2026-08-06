<template>
  <svg
      class="icon"
      :fill="fill"
      :height="height"
      :viewBox="viewBox"
      :width="width"
  >
    <use :xlink:href="href" />
  </svg>
</template>

<script>
export default {
  name: 'icon',
  props: {
    iconName: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: '100%'
    },
    fill: {
      type: String,
      default: 'currentColor'
    }
  },
  computed: {
    file () {
      let icon

      icon = require(`@/assets/icons/${this.iconName}.svg`)

      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default
      }

      return icon
    },
    viewBox () {
      return this?.file?.viewBox
          ? this.file.viewBox
          : `0 0 ${parseInt(this.width)}${2} ${parseInt(this.height)}${2}`
    },
    href () {
      return this.file || ''
    }
  }
}
</script>
