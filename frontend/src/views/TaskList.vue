<template>
  <v-container>
    <h1 justify="center" align="center">My Tasks</h1>
    <v-row>
      <v-col md="6" col="12" v-for="task in tasks" :key="task.id">
        <TaskCard :task="task" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import TaskCard from '@/components/TaskCard.vue'
export default {
  components: { TaskCard },
  created () {
    this.$store.dispatch('fetchTasks')
  },
  computed: mapState(['tasks'])
}
</script>
