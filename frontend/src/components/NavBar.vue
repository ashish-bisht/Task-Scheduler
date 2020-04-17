<template>
  <nav>
    <v-app-bar flat app dense>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-lg-and-up"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div class="hidden-md-and-down">
        <v-btn outlined to="/">
          <span>Home</span>
        </v-btn>
        <v-btn outlined to="/task">
          <span>Tasks</span>
        </v-btn>
        <v-btn outlined :to="{ name: 'task-create' }">
          <span>Create Task</span>
        </v-btn>
        <v-btn icon @click="toggleTheme()">
          <v-icon>mdi-invert-colors</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            TASK SCHEDULER
          </v-list-item-title>
          <v-list-item-subtitle>
            Full Stack Developer
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          link
          router
          :to="item.router"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      menuItems: [
        { icon: 'mdi-home', title: 'HOME', router: '/' },
        { icon: 'mdi-code-json', title: 'Projects', router: '/projects' },
        { icon: 'mdi-card-account-details', title: 'About', router: '/about' },
        { icon: 'mdi-card-account-mail', title: 'Contact', router: '/contact' }
      ]
    }
  },
  methods: {
    toggleTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
