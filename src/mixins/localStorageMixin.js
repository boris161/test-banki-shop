export const localStorageMixin = {
  methods: {
    setItemStorage(key, value) {
      try {
        const serializedValue = typeof value === 'string' ? value : JSON.stringify(value)
        localStorage.setItem(key, serializedValue)
      } catch (error) {
        console.error('Error saving to localStorage:', error)
      }
    },

    getItemStorage(key) {
      try {
        const item = localStorage.getItem(key)
        if (item === null) return null

        try {
          return JSON.parse(item)
        } catch {
          return item
        }
      } catch (error) {
        console.error('Error reading from localStorage:', error)
        return null
      }
    },

    removeItemStorage(key) {
      try {
        localStorage.removeItem(key)
      } catch (error) {
        console.error('Error removing from localStorage:', error)
      }
    },

    clearStorage() {
      try {
        localStorage.clear()
      } catch (error) {
        console.error('Error clearing localStorage:', error)
      }
    }
  }
}