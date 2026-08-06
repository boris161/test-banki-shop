export const searchMixin = {
  methods: {
    filterList(searchValue, list, searchField = 'title') {
      if (!searchValue || !searchValue.trim()) {
        return list
      }

      const query = searchValue.toLowerCase().trim()
      const fields = Array.isArray(searchField) ? searchField : [searchField]

      return list.filter(item => {
        return fields.some(field => {
          const value = this.getNestedValue(item, field)
          return value && value.toLowerCase().includes(query)
        })
      })
    },
    getNestedValue(obj, path) {
      return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : null
      }, obj)
    }
  }
}