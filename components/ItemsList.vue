<template>
  <div>
    <nuxt-link to="/create" class="btn btn-primary mb-2"
      >Créer un objet</nuxt-link
    >
    <div v-if="!items.length">
      <h1 class="text-danger">Pas d'objets trouvés</h1>
    </div>
    <div v-else>
      <b-table striped hover :items="items" :fields="fields">
        <template #cell(createdAt)="item">
          {{ new Date(item.value).toLocaleString() }}
        </template>

        <template #cell(updatedAt)="item">
          {{ new Date(item.value).toLocaleString() }}
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: 'name',
          label: 'Nom',
          sortable: true,
        },
        { key: 'description', label: 'Description', sortable: true },
        {
          key: 'createdAt',
          label: 'Date de création',
        },
        {
          key: 'updatedAt',
          label: 'Date de modification',
        },
        {
          key: 'actions',
          label: 'Actions',
        },
      ],
      items: [],
    }
  },
  async fetch() {
    const res = await this.$axios.$get('/items')
    this.items = res
  },
}
</script>
