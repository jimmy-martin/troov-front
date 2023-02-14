<template>
  <div class="mb-3">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <nuxt-link to="/" class="navbar-brand">Troov</nuxt-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link to="/" class="nav-link">Objets trouvés</nuxt-link>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown v-if="$store.getters['authentication/user']" right>
          <template
            v-if="$store.getters['authentication/user']"
            #button-content
          >
            Bonjour, {{ user.username }}
          </template>
          <b-dropdown-item href="#" @click="test">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item v-else right href="/login">Se connecter</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    user() {
      return this.$store.getters['authentication/user']
    },
  },
  methods: {
    signout() {
      this.$store.commit('authentication/SET_TOKEN', null)
      this.$store.commit('authentication/SET_USER', null)
      this.$router.push('/')
    },
  },
}
</script>
