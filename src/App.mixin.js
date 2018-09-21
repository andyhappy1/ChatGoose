import { mapMutations } from 'vuex'


export default {
  name: 'app',



  mounted () {

  },

  computed: {
    isUserAuthenticated: {
      get () {
        return this.$store.state.isUserAuthenticated
      },

      set (isUserAuthenticated) {
        this.$store.commit('SET_IS_USER_AUTHENTICATED', isUserAuthenticated)
      }
    }


  },

  methods: {
    deleteCookie (cookie) {
      document.cookie = `${cookie}=; Max-Age=0`
    },

    ...mapMutations({
      setLocale: 'SET_LOCALE'
    })
  }
}
