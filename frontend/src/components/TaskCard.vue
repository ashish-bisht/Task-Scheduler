<template>
  <div>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{ task.status }} {{ task.id }}</div>
          <v-list-item-title class="headline mb-1">{{
            task.task
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ task.summary }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <router-link :to="{ name: 'task-detail', params: { id: task.id } }"
          >TAKE</router-link
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  }
}
</script>
