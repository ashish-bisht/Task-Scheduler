<template>
  <v-container>
    <div>
      <template>
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div>{{ task.status }}</div>
            <p class="display-1 text--primary">
              {{ task.task }}
            </p>

            <div class="text--primary">
              {{ task.summary }}
            </div>
          </v-card-text>
          <p>{{ task.created }}</p>
          <p>{{ task.last_modified }}</p>
          <v-btn @click="deleteTask()">Delete</v-btn>
        </v-card>
      </template>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  methods: {
    deleteTask () {
      axios
        .delete('http://localhost:8000/api/task/' + this.id)
        .then(response => {
          console.log(response.data)
          this.$router.push('/')
        })
    }
  },
  props: ['id'],
  created () {
    this.$store.dispatch('fetchTask', this.id)
  },
  computed: mapState(['task'])
}
</script>
