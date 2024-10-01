export const preloader = {
  computed: {
    isLoading() {
      return this.$store.getters['getIsLoading'];
    }
  },
  beforeMount() {
    this.$store.dispatch('setIsLoading', true)
  },
  methods:  {
    hideLoader() {
      this.$store.dispatch('setIsLoading', false)
    }
  }
}