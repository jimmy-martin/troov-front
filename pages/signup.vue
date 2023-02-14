<template>
  <div>
    <h1>Créer un compte</h1>
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="username-group"
        label="Nom d'utilisateur:"
        label-for="username"
        description="Nom d'utilisateur"
      >
        <b-form-input
          id="username"
          v-model="form.username"
          type="text"
          placeholder="Entrez votre nom d'utilisateur"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="password-group"
        label="Mot de passe:"
        label-for="password"
        description="Mot de passe"
      >
        <b-form-input
          id="password"
          v-model="form.password"
          type="password"
          placeholder="Entrez votre mot de passe"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Créer un compte</b-button>
      <b-button type="reset" variant="danger">Réinitialiser</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      show: true,
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.$axios.$post('/auth/signup', this.form).then((result) => {
        this.$store
          .commit('authentication/SET_USER', {
            id: result._id,
            username: result.username,
            createdAt: result.createdAt,
            updatedAt: result.updatedAt,
          })
          .then(() => {
            alert(this.$store.getters['authentication/user'])
          })
      })
    },
    onReset(event) {
      event.preventDefault()
      this.form.username = ''
      this.form.password = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>
