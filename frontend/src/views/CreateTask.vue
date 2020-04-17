<template>
  <v-container>
    <h1>Create Task</h1>

    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New Task</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title
          >Add Task</v-card-title
        >

        <v-card-text>
          <v-form class="px-3">
            <v-text-field
              label="Task Name"
              v-model="task"
              prepend-icon="mdi-folder"
            ></v-text-field>
            <!-- <v-text-field
              label="Status"
              v-model="status"
              prepend-icon="mdi-folder"
            ></v-text-field> -->
            <v-textarea
              label="Notes"
              v-model="summary"
              prepend-icon="mdi-edit"
            ></v-textarea>

            <!-- <v-menu max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field
                  :value="start_date"
                  label="Start date"
                  prepend-icon="mdi-calendar-range"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="start_date"></v-date-picker>
            </v-menu>

            <v-menu max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field
                  :value="end_date"
                  label="End date"
                  prepend-icon="mdi-calendar-range"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="end_date"></v-date-picker>
            </v-menu> -->

            <v-btn
              text
              class="success mx-0 mt-3"
              @click="createTask"
              :loading="loading"
              >Add Task</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      task: 'task name please',
      summary: 'quick summary',
      dialog: false,
      loading: false
    }
  },
  methods: {
    createTask () {
      const task = {
        task: this.task,
        summary: this.summary
      }
      console.log(this.task)
      this.$store.dispatch('createTask', task)
    }
  }
}
</script>
