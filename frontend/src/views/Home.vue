<template>
  <v-container>
    <h1 justify="center" align="center">My Tasks</h1>
    <v-row align="center" justify="center">
      <v-col v-for="task in tasks" :key="task.id" col="12" md="6">
        <div>
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">{{ task.status }}</div>
                <v-list-item-title class="headline mb-1">{{
                  task.task
                }}</v-list-item-title>
                <v-list-item-subtitle>{{ task.summary }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn text>Button</v-btn>
              <v-btn text>Button</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      tasks: []
    }
  },
  created () {
    axios
      .get('http://127.0.0.1:8000/api/task/')
      .then(response => {
        console.log(response.data)
        this.tasks = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
